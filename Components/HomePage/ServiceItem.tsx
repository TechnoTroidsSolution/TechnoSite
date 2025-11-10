import type { ComponentType } from "react";

export interface ServiceItemProps {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export default function ServiceItem({
  icon: Icon,
  title,
  description,
}: ServiceItemProps) {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 mt-1">
        <Icon className="w-8 h-8 text-gray-800" />
      </div>
      <div>
        <h4 className="font-semibold text-lg text-gray-900">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
