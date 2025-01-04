import Link from "next/link";
import { renderButtonStyle } from "../utils/render-button-style";

interface Button {
  id: string;
  url: string;
  text: string;
  type: string;
  newTab: boolean;
}

interface Picture {
  data: {
    id: string;
    attributes: {
      url: string;
      name: string;
      alternativeText: string;
    };
  };
}

interface HeroProps {
  data: {
    id: string;
    title: string;
    description: string;
    picture: Picture;
    buttons: Button[];
  };
}

export default function Hero({ data }: HeroProps) {

  return (
    <section className="dark:bg-black dark:text-gray-100 h-screen">
      <div className="container flex justify-center mx-auto flex-row items-center h-full">
        <div className="flex flex-col justify-center text-center">
          <h1 className="text-9xl font-serif">{data.title}</h1>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center ">
            {data.buttons.map((button: Button, index: number) => (
              <Link
                key={index}
                href={button.url}
                target={button.newTab ? "_blank" : "_self"}
                className={renderButtonStyle(button.type)}
              >
                {button.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
