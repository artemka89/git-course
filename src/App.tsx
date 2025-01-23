import { Button } from "./components/button";

export const App = () => {
  return (
    <div className="w-[400px] ml-11">
      <h1 className="text-3xl font-bold text">Hello World!</h1>
      <p className="text-lg text-blue-700">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus
        numquam repudiandae dignissimos quos quia! Molestiae aliquid tempore
        sint, incidunt esse eligendi molestias nihil iure perspiciatis, nulla
        harum sapiente exercitationem doloremque.
      </p>
      <p className="text-lg text-orange-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
        voluptatum quod obcaecati quos ducimus explicabo facilis tempore modi
        natus inventore numquam nisi, dignissimos commodi itaque eligendi autem
        quo possimus praesentium.
      </p>
      <Button onChange={() => console.log("click")}>Click</Button>
    </div>
  );
};
