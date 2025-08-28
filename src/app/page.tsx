import Banner from "../components/Banner";
import Card from "../components/Card";
//import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div>
      <Banner imageUrl="/banner.jpg" />
      <br/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8 container mx-auto">
        <Card venueName="The Bloom Pavilion" imgSrc="/img/bloom.jpg" />
        <Card venueName="Spark Space" imgSrc="/img/sparkspace.jpg" />
        <Card venueName="The Grand Table" imgSrc="/img/grandtable.jpg" />
      </div>
    </div>
  );
}
