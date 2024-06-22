import {
  GoBellFill,
  GoBook,
  GoCheckCircleFill,
  GoCreditCard,
  GoHeartFill,
} from "react-icons/go";
import Button from "../components/Button";

export default function ButtonPage() {
  const handleClick = () => {};
  return (
    <div>
      <div>
        <Button className="mb-5" success rounded outline onClick={handleClick}>
          <GoCreditCard />
          Buy Now!
        </Button>
      </div>

      <div>
        <Button danger outline onMouseEnter={handleClick}>
          <GoBellFill />
          Notification
        </Button>
      </div>
      <div>
        <Button warning>
          <GoHeartFill onMouseLeave={handleClick} />
          Wishlist
        </Button>
      </div>
      <div>
        <Button outline secondary>
          <GoBook />
          Read
        </Button>
      </div>
      <div>
        <Button primary rounded outline>
          <GoCheckCircleFill />
          Check out!
        </Button>
      </div>
    </div>
  );
}
