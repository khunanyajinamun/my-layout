export default function Home() {
  return (
    <>
      <div className="container-fluid">

        <div className="row text-center">
          <div className="col-md-12 bg-warning p-3">
            Navber
          </div>
        </div>

        <div className="row text-center">
          <div className="col-md-12 bg-danger p-5">
            Header
          </div>
        </div>
        
        <div className="row text-center">
          <div className="col-md-4 bg-primary p-5">
            Card1
          </div>
          <div className="col-md-4 bg-info p-5">
            Card2
          </div>
          <div className="col-md-4 bg-primary p-5">
            Card3
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-12 bg-success p-5">
            Footer
          </div>
        </div>
      </div>
    </>
  );
}
