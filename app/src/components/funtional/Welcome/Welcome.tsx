import CardProduct from "@/components/ui/CardProduct";
import styles from "./Welcome.module.scss";
import React from "react";
import CardPromo from "@/components/ui/CardPromo";
import CardCategory from "@/components/ui/CardCategory";
import Title from "@/components/ui/Title";
import Table from "@/components/ui/Table/Table";
const Welcome = () => {
  const data = [
    {
      name: "Promo pichu pichu pichu",
      description: "asdasd",
      img: "https://media-cdn.tripadvisor.com/media/photo-s/1a/19/28/8e/nuestra-charlie-burger.jpg",
      price: 5000,
      ingredients: [
        {
          name: "Papas fritas",
          calories: "250",
        },
        {
          name: "Churrasco",
          calories: "250",
        },
        {
          name: "Mayo",
          calories: "250",
        },
        {
          name: "Papas fritas",
          calories: "250",
        },
      ],
    },
    {
      name: "Promo pichu pichu",
      description: "asdasd",
      img: "https://media-cdn.tripadvisor.com/media/photo-s/1a/19/28/8e/nuestra-charlie-burger.jpg",
      price: 5000,
      ingredients: [
        {
          name: "Papas fritas",
          calories: "250",
        },
        {
          name: "Churrasco",
          calories: "250",
        },
        {
          name: "Mayo",
          calories: "250",
        },
      ],
    },
    {
      name: "Promo pichu pichu",
      description: "asdasd",
      img: "https://media-cdn.tripadvisor.com/media/photo-s/1a/19/28/8e/nuestra-charlie-burger.jpg",
      price: 5000,
      ingredients: [
        {
          name: "Papas fritas",
          calories: "250",
        },
        {
          name: "Churrasco",
          calories: "250",
        },
        {
          name: "Mayo",
          calories: "250",
        },
      ],
    },
    {
      name: "Promo pichu pichu",
      description: "asdasd",
      img: "https://media-cdn.tripadvisor.com/media/photo-s/1a/19/28/8e/nuestra-charlie-burger.jpg",
      price: 5000,
      ingredients: [
        {
          name: "Papas fritas",
          calories: "250",
        },
        {
          name: "Churrasco",
          calories: "250",
        },
        {
          name: "Mayo",
          calories: "250",
        },
      ],
    },
    {
      name: "Promo pichu pichu",
      description: "asdasd",
      img: "https://media-cdn.tripadvisor.com/media/photo-s/1a/19/28/8e/nuestra-charlie-burger.jpg",
      price: 5000,
      ingredients: [
        {
          name: "Papas fritas",
          calories: "250",
        },
        {
          name: "Churrasco",
          calories: "250",
        },
        {
          name: "Mayo",
          calories: "250",
        },
      ],
    },
    {
      name: "Promo pichu pichu",
      description: "asdasd",
      img: "https://media-cdn.tripadvisor.com/media/photo-s/1a/19/28/8e/nuestra-charlie-burger.jpg",
      price: 5000,
      ingredients: [
        {
          name: "Papas fritas",
          calories: "250",
        },
        {
          name: "Churrasco",
          calories: "250",
        },
        {
          name: "Mayo",
          calories: "250",
        },
      ],
    },
    {
      name: "Promo pichu pichu",
      description: "asdasd",
      img: "https://media-cdn.tripadvisor.com/media/photo-s/1a/19/28/8e/nuestra-charlie-burger.jpg",
      price: 5000,
      ingredients: [
        {
          name: "Papas fritas",
          calories: "250",
        },
        {
          name: "Churrasco",
          calories: "250",
        },
        {
          name: "Mayo",
          calories: "250",
        },
      ],
    },
  ];

  // useEffect(() => {
  //   fetch("http://localhost:3005/api/status", {
  //     headers: { id: "957902342" },
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // }, []);

  return (
    <div className={styles.welcome}>
      <Title title="En nuestro menú, encontrarás sándwiches tan irresistibles que nunca podrás volver a una relación seria con una ensalada." />
      <div className={styles.contentCardProduct}>
        {data.map((item, key) => (
          <CardProduct
            key={key}
            name={item.name}
            description={item.description}
            img={item.img}
            price={item.price}
            ingredients={item.ingredients}
          />
        ))}
      </div>
      <div className={styles.contentCardProduct}>
        <CardPromo
          title="Lo mas rapido"
          info={
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, voluptatum quod. Animi cumque ut, delectus consequuntur quae corporis hic aliquid optio aliquam facilis officia quaerat obcaecati unde ipsa molestiae? Esse!"
          }
          price={2500}
        />
        <CardPromo
          title="Lo mas rapido"
          info={
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, voluptatum quod. Animi cumque ut, delectus consequuntur quae corporis hic aliquid optio aliquam facilis officia quaerat obcaecati unde ipsa molestiae? Esse!"
          }
          price={2500}
        />
      </div>
      <div className={styles.contentCardProduct}>
        <CardCategory
          alignItems="flex-start"
          category="SandWich"
          img="https://media-cdn.tripadvisor.com/media/photo-s/1a/19/28/8e/nuestra-charlie-burger.jpg"
          count={55}
        />
        <CardCategory
          alignItems="center"
          category="Colaciones"
          img="https://media-cdn.tripadvisor.com/media/photo-s/1a/19/28/8e/nuestra-charlie-burger.jpg"
          count={55}
        />
        <CardCategory
          alignItems="flex-end"
          category="Colaciones"
          img="https://media-cdn.tripadvisor.com/media/photo-s/1a/19/28/8e/nuestra-charlie-burger.jpg"
          count={55}
        />
      </div>

      <Table />
    </div>
  );
};

export default Welcome;
