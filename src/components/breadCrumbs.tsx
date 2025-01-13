import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  url?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="breadcrumbs text-sm text-gray-500" style={{marginLeft:"3vh"}}>
      {items.map((item, index) => (
        <span key={index}>
          {item.url ? (
            <Link to={item.url} className="hover:underline">
              {item.label}
            </Link>
          ) : (
            item.label
          )}
          {index < items.length - 1 && ' > '}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
