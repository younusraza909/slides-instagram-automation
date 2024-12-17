import { usePathname } from "next/navigation";

export const usePaths = () => {
  const pathname = usePathname();

  console.log("pathname", pathname);

  const path = pathname.split("/");

  console.log("path", path);

  let page = path[path.length - 1];

  console.log("page", page);

  return {
    page,
    pathname,
  };
};
