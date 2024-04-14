const Card = ({
  children
}) => {
  return (
    <div className="card card-bordered rounded-lg border-gray-700">
      {children}
    </div>
  );
}

const BuyerCardTitle = ({ children }) => {
  return (
    <div className="bg-red-200 text-2xl font-bold p-4 rounded-t-lg">{children}</div>
  );
}

const SellerCardTitle = ({ children }) => {
  return (
    <div className="bg-blue-200 text-2xl font-bold p-4 rounded-t-lg">{children}</div>
  );
}

const CardTitle = ({ children }) => {
  return (
    <div className="text-2xl font-bold p-4 rounded-t-lg">{children}</div>
  );
}


const CardBody = ({ children }) => {
  return (
    <div className="p-2">
      {children}
    </div>
  );
}


export { Card, CardTitle, BuyerCardTitle, SellerCardTitle, CardBody }
