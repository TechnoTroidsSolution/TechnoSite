import fs from 'node:fs';
import path from 'node:path';
import yaml from "js-yaml";
import ServiceDetailPage from "@/Components/ServicesPage/ServiceDetailPage";
import { notFound } from "next/navigation";

function loadServicesData() {
  const filePath = path.join(process.cwd(), "content", "servicesdescription.yaml");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const data: any = yaml.load(fileContents);
  return data.services;
}

export async function generateStaticParams() {
  const services = loadServicesData();
  return services.map((service: any) => ({
    id: service.id,
  }));
}

export default async function ServiceDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const services = loadServicesData();
  const service = services.find((s: any) => s.id === id);

  if (!service) return notFound();

  return <ServiceDetailPage service={service} />;
}
