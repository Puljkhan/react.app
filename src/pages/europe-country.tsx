import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EuropeCountry = () => {
  let { capitalId } = useParams();
  const [countryData, setCountryData] = useState<any>();
  const [loading, setLoading] = useState(true);

  const getCountry = (capitalId: string) => {};

  useEffect(() => {});

  return <div className="container"></div>;
};

export default EuropeCountry;
