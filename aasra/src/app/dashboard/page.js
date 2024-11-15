import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { div } from "framer-motion/client";

const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
  );
  const items = [
    {
      title: "The Dawn of Innovation",
      description: "Explore the birth of groundbreaking ideas and inventions.",
      header: <Skeleton />,
      className: "md:col-span-2",
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
      backgroundImage: "url('/path-to-image1.jpg')",
    },
    {
      title: "The Digital Revolution",
      description: "Dive into the transformative power of technology.",
      header: <Skeleton />,
      className: "md:col-span-1",
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
      backgroundImage: "url('https://www.shutterstock.com/image-illustration/shopping-basket-foods-on-receipt-260nw-2144658119.jpg')",
    },
    {
        title: "The Digital Revolution",
        description: "Dive into the transformative power of technology.",
        header: <Skeleton />,
        className: "md:col-span-1",
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
        backgroundImage: "url('https://www.shutterstock.com/image-illustration/shopping-basket-foods-on-receipt-260nw-2144658119.jpg')",
      },
    {
        title: "The Dawn of Innovation",
        description: "Explore the birth of groundbreaking ideas and inventions.",
        header: <Skeleton />,
        className: "md:col-span-2",
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
        backgroundImage: "url('/path-to-image1.jpg')",
      },

    
    // Add other items with their respective background images
  ];
  
  const page = () => {
    return (
      <>
        <div className="h-20 w-full">Navbar</div>
        <div className="w-full text-center mb-20 text-7xl font-bold">
          Welcome Home
        </div>
        <div className="flex gap-10 w-screen mt-8">
          <div className="w-7/12 ml-20">
            <BentoGrid className="w-full mx-auto md:auto-rows-[20rem]">
              {items.map((item, i) => (
                <BentoGridItem
                  key={i}
                  title={item.title}
                  description={item.description}
                  header={
                    <div
                      style={{
                        backgroundImage: item.backgroundImage,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "100%",
                        borderRadius: "1rem", // Optional for rounded corners
                      }}
                    >
                      {item.header}
                    </div>
                  }
                  className={item.className}
                  icon={item.icon}
                />
              ))}
            </BentoGrid>
          </div>
          <div className="transform animate-spin-slow my-10 mx-10">
            <img
              className=""
              src="https://happygrub.in/img/indian-plate.png"
              alt="Rotating Image"
            />
          </div>
        </div>
      </>
    );
  };
  
  export default page;
  