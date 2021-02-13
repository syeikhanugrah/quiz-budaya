import Container from './Container';

function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <Container>
        <div className="flex justify-between">
          <div>
            <a href="/" className="no-underline">Home</a>
          </div>
          <div>
            <a href="/" className="no-underline">High score</a>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
