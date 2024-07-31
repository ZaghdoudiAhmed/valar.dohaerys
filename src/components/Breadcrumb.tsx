import Link from "next/link";
import { ReactElement } from "react";

interface BreadcrumbItemProps {
  name: string;
  link: string;
  underline?: boolean;
  icon: ReactElement;
}

function BreadcrumbItem({ name, link, icon, underline }: BreadcrumbItemProps) {
  return (
    <li className="inline-flex items-center">
      <Link
        href={link}
        className={`text-black font-circular_medium font-IBMPlex  text-[15px] hover:text-gray-900 ${
          underline && "underline"
        } inline-flex items-center`}
      >
        {icon}
        {name}
      </Link>
    </li>
  );
}

const Breadcrumb = ({ items }: { items: BreadcrumbItemProps[] }) => {
  if (!items.length) {
    return null;
  }
  return (
    <nav aria-label="Breadcrumb">
      <ol className="inline-flex flex-wrap px-5 items-center  space-x-1 md:space-x-2 rtl:space-x-reverse">
        {items.map((item) => (
          <BreadcrumbItem
            key={item.name}
            name={item.name}
            link={item.link}
            icon={item.icon}
            underline={item.underline}
          />
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
