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
      {/* Icon: Updated for monochrome theme - uses dark gray accent */}
      <div className="flex-shrink-0 mt-1 p-2 rounded-lg bg-gray-100">
        <Icon className="w-6 h-6 text-gray-800" />
      </div>
      <div>
        {/* Title: Dark text */}
        <h4 className="font-semibold text-lg text-gray-900">{title}</h4>
        {/* Description: Gray text */}
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
