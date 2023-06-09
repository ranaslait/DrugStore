const User = require("../models/users");
const path = require('path');
const bcrypt = require("bcrypt");
const MailGen = require('mailgen')
const jwt = require('jsonwebtoken');
const sgMail = require('@sendgrid/mail');
var passportLocalMongoose = require("passport-local-mongoose");
const SENDGRID_API_KEY = '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';
const randomStr = () => require('crypto').randomBytes(32).toString('hex');

const reg = async (req, res) => {
    const body = req.body;
    if (!(body.name && body.email && body.password && body.phone && body.type)) {
        // return res.redirect('/');
    }
    const user = new User(body);
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    user.save().then((doc) => res.redirect('/user/login'));

};

const checkUN = (req, res) => {
    var query = { name: req.body.name };
    User.find(query)
        .then(result => {
            if (result.length > 0) {
                res.send('taken');
            }
            else {
                res.send('available');
            }
        })
        .catch(err => {
            console.log(err);
        });
};

const checkmail = (req, res) => {
    var query1 = { email: req.body.email };
    User.find(query1)
        .then(result1 => {
            if (result1.length > 0) {
                res.send('taken');
            }
            else {
                res.send('available');
            }
        })
        .catch(err => {
            console.log(err);
        });
};

const LogIn = async (req, res) => {
    try {
        const body = req.body;
        const user = await User.findOne({ email: body.email });
        if (user) {
            // Check the user password with the hashed password stored in the database
            const validPassword = await bcrypt.compare(body.password, user.password);
            if (validPassword) {
                console.log("logged in");
                req.session.user = user;
                res.redirect('/');
            } else {
                req.session.error = 'Wrong Password';
                //  req.session.user = req.session.user || "";
                res.redirect('/load2');
            }
        } else {
            req.session.error = 'User not found';
            //  req.session.user = req.session.user || "";
            res.redirect('/load2');
        }
    } catch (err) {
        console.log(err);
        res.redirect('pages/404');
    }
};

const forgotPassword = async (req, res) => {
    try {

        const email = req.body.email;

        const token = randomStr({
            length: 20,
            type: 'url-safe',
        });

        const date = new Date();
        const expTime = date.getTime() + 60000;
        const updateToken = await User.findOneAndUpdate(
            { email: email },
            { $set: { token, expTime } }
        );
        const mailGenerator = new MailGen({
            theme: 'salted',
            product: {
                name: 'Dose',
                link: "https://getdose.store",
                // logo: your app logo url
            },
        })
        emailT = {
            body: {
                name: req.body.email,
                intro: 'Forgot Your Password? No Problem',
                action: {
                    instructions: 'Please click the button below to reset your password',
                    button: {
                        color: '#33b5e5',
                        text: 'Reset Password',
                        link: `https://getdose.store/api/users/resetPassword?token=${token} Link will expire in 10 min`
                    },
                },
            },
        }


        const emailTemplate = mailGenerator.generate(emailT)
        require('fs').writeFileSync('preview.html', emailTemplate, 'utf8')
        if (!updateToken) { throw new Error('Can not find user'); }
        else {
            sgMail.setApiKey(SENDGRID_API_KEY);
            const sendMail = {
                to: updateToken.email,
                from: 'ddose0725@gmail.com',
                subject: 'reset password',
                html: emailTemplate,
            };
            sgMail.send(sendMail);
            res.redirect('/load');

        }
    } catch (err) {
        res.send(err.message);
    }
};

const resetPassword = async (req, res) => {
    const body = req.body;
    const user = await User.findOne({ email: req.body.email });
    var newInput = req.body.newPassword;
    const salt = await bcrypt.genSalt(10);
    newInput = await bcrypt.hash(newInput, salt);
    console.log(user._id);
    User.findByIdAndUpdate(user._id, { password: newInput })
    .then(result => {
        req.body.password = newInput;
        res.redirect('/user/login')
    })
    .catch(err => {
        console.log(err);
    });

};


module.exports = {
    reg,
    checkUN,
    LogIn,
    forgotPassword,
    resetPassword,
    checkmail
    
};