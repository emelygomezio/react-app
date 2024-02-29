//add logo 

const Navbar = () => {
  return (
    <div className="navBar" >
        <input id="checkbox" type="checkbox"/>
    <label class="toggle" for="checkbox">
        <div id="bar1" class="bars"></div>
        <div id="bar2" class="bars"></div>
        <div id="bar3" class="bars"></div>
    </label>
    <h2>Shopify</h2>
    </div>
  )
}

export default Navbar