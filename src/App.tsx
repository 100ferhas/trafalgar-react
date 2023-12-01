import Banner from './components/banner/Banner';
import Navigation from './components/navigation/Navigation';
import illustration from './assets/images/homepage/banner-illustration.png';
import illustration2 from './assets/images/homepage/banner-illustration-2.png';
import illustration3 from './assets/images/homepage/banner-illustration-3.png';
import Button from './components/button/Button';
import navigationItems from './data/navigation-items';
import CardGrid from './components/card-grid/CardGrid';
import { servicesGridCards, articlesGridCards } from './data/homepage';
import Card from './components/card/Card';
import Reviews from './components/reviews/Reviews';

function App() {
  return (
    <>
      <Navigation
        logoText='Trafalgar'
        items={navigationItems} />

      <Banner
        title='Virtual healthcare for you'
        content='Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone'
        button={<Button type='primary' text="Consult Today" />}
        illustration={illustration} />

      <CardGrid
        title='Our services'
        description='We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health'
        button={<Button text='Learn more' />}>

        {
          servicesGridCards.map((item, index) => {
            return <Card
              key={`service_card_${index}`}
              image={item.image}
              title={item.title}
              description={item.description} />
          })
        }
      </CardGrid>

      <Banner
        separator={true}
        type='reverse'
        title='Leading healthcare providers'
        content='Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver'
        button={<Button text="Learn more" />}
        illustration={illustration2} />

      <Banner
        separator={true}
        title='Download our mobile apps'
        content='Our dedicated patient engagement app and 
        web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely'
        button={<Button text="Download" />}
        illustration={illustration3} />

      <Reviews />

      <CardGrid
        type='right'
        title='Check out our latest article'
        button={<Button text='View all' />}>

        {
          articlesGridCards.map((item, index) => {
            return <Card
              key={`article_card_${index}`}
              image={item.image}
              imageFull={true}
              title={item.title}
              description={item.description}
              button={item.button} />
          })
        }

      </CardGrid>

    </>
  );
}

export default App;
