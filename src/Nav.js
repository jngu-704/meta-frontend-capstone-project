function Nav() {
  // const handleClick = (anchor) => () => {
  //   const id = `${anchor}-section`;
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({
  //       behavior: "smooth",
  //       block: "start",
  //     });
  //   }
  // };
  return (
    <nav>
      <ul >
        <li><a href="/#home">Home</a></li>
        <li><a href="/#about">About</a></li>
        <li><a href="/#menu">Menu</a></li>
        <li><a href="/#reservations">Reservations</a></li>
        <li><a href="/#order-online">Order Online</a></li>
        <li><a href="/#login">Login</a></li>
      </ul>
    </nav>
  );
}

export default Nav;