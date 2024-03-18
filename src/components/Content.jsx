import "../App.css";

export default function Content(propos) {
  return (
    <>
      <div className={`container1 ${propos.color}` } >
        <h1>{propos.title}</h1>
        <p>
         {propos.Description}
        </p>
      </div>
      
    </>
  );
}
// <>
    //   <div className="container">
    //     <h1>Lorem</h1>
    //     <p>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
    //       iusto. Reiciendis magnam excepturi quae ab iure, eaque libero nisi
    //       nulla quis reprehenderit odio quasi facere recusandae ipsa repudiandae
    //       placeat quas. Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //       Quod ex magnam rerum sapiente delectus vitae sequi qui quidem
    //       repellendus obcaecati accusamus animi laudantium, aperiam, sunt
    //       similique iste aut debitis omnis.
    //     </p>
    //   </div>
    //   <Content
    //     color="blue"
    //     title="ReactJsx"
    //     Description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
    //       iusto. Reiciendis magnam excepturi quae ab iure, eaque libero nisi
    //       nulla quis reprehenderit odio quasi facere recusandae ipsa repudiandae
    //       placeat quas. Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //       Quod ex magnam rerum sapiente delectus vitae sequi qui quidem
    //       repellendus obcaecati accusamus animi laudantium, aperiam, sunt
    //       similique iste aut debitis omnis."
    //   />
    //   <Content
    //     color="green"
    //     title="JavaScript"
    //     Description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
    //       iusto. Reiciendis magnam excepturi quae ab iure, eaque libero nisi
    //       nulla quis reprehenderit odio quasi facere recusandae ipsa repudiandae
    //       placeat quas. Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //       Quod ex magnam rerum sapiente delectus vitae sequi qui quidem
    //       repellendus obcaecati accusamus animi laudantium, aperiam, sunt
    //       similique iste aut debitis omnis."
    //   />
    // </>