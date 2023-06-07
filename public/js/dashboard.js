const visitor=()=>{
    let visitor=0;

    function handleClick() {
        visitor++;
        document.getElementById("counter").textContent = visitor;
      }
      
      document.getElementById("submitT").addEventListener("click", handleClick);

}
visitor();