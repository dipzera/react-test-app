import { useEffect } from "react";
import { animated, useSpring } from "react-spring";

import { useOutsideClick } from "../hooks/use-click-outside";
import { useHasScrolledPast } from "../hooks/use-has-scrolled-past";

import Close from "../assets/svg-components/Close";

type Props = {
  children: React.ReactNode;

  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;

  title: React.ReactNode;
};

// TODO: Move to separate dir where you would put utility components
export default function Drawer({ children, show, setShow, title }: Props) {
  const [springs, api] = useSpring(() => ({
    from: { x: 100 },
  }));

  const hasScrolledPast = useHasScrolledPast(
    parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue(
        "--navbar-height",
      ),
    ),
  );

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
      api.start({ from: { x: 100 }, to: { x: 0 } });
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);

  const ref = useOutsideClick(() => {
    if (show) {
      setShow(false);
    }
  });

  return (
    <animated.div
      style={{
        ...springs,
        top: hasScrolledPast ? "0px" : "calc(0px + var(--navbar-height))",
      }}
      className="bg-white right-0 fixed h-full w-[700px] shadow-lg z-50"
      ref={ref}
    >
      <div className="bg-gray py-5 px-6">
        <div className="headline flex justify-between">
          <h2>{title}</h2>
          <div
            className="cursor-pointer text-xl"
            onClick={() => setShow(false)}
          >
            <Close />
          </div>
        </div>
        <div>{children}</div>
      </div>
    </animated.div>
  );
}
