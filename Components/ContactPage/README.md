# ContactPage Component

A reusable, comprehensive contact page component for TechnoTroids website.

## Location
`Components/ContactPage/ContactPage.tsx`

## Features

- **Fully Reusable**: Can be used on multiple pages with different configurations
- **Data-Driven**: All content loaded from `content/contact.yaml`
- **Customizable Hero Section**: Optional hero section with custom titles
- **Multiple Contact Methods**: Email sections for different customer types
- **Contact Form**: Integrated contact form with validation
- **Support Resources**: Technical support, knowledge base, and community links
- **FAQ Section**: Expandable FAQ accordion
- **Social Media Integration**: Social media links and newsletter signup
- **Emergency Support**: Highlighted emergency contact section
- **Responsive Design**: Fully mobile-responsive layout

## Usage

### Basic Usage

```tsx
import ContactPage from '@/Components/ContactPage/ContactPage';
import { getContactData } from '@/lib/contactData'; // Your data fetching function

export default function Contact() {
  const data = getContactData();

  return <ContactPage data={data} />;
}
```

### With Custom Hero

```tsx
<ContactPage 
  data={data}
  showHero={true}
  heroTitle="Get in Touch"
  heroSubtitle="We're here to help you succeed."
/>
```

### Without Hero

```tsx
<ContactPage 
  data={data}
  showHero={false}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `ContactData` | **Required** | Contact data from YAML file |
| `showHero` | `boolean` | `true` | Whether to show hero section |
| `heroTitle` | `string` | `"Need assistance?"` | Hero section title |
| `heroSubtitle` | `string` | `"Our team is ready to help you."` | Hero section subtitle |

## Data Structure

The component expects data in the following structure (defined in `content/contact.yaml`):

```typescript
interface ContactData {
  contact: {
    section_title: string;
    section_subtitle: string;
    form_intro: string;
    form_fields: FormField[];
    alternative_contact: {
      title: string;
      subtitle: string;
      methods: ContactMethod[];
    };
    response_commitment: {
      promise: string;
      note: string;
    };
  };
  project_inquiry: {
    section_title: string;
    section_subtitle: string;
    approach: {
      headline: string;
      description: string;
    };
    what_we_explore: {
      title: string;
      items: Array<{
        point: string;
        why: string;
      }>;
    };
    what_you_receive: {
      title: string;
      items: string[];
    };
    commitment: {
      text: string;
      note: string;
    };
    cta: string;
  };
}
```

## Sections Included

1. **Hero Section** (Optional)
2. **Contact Methods** - New vs Existing Customers
3. **Concierge Service** - Introduction to help services
4. **Project Inquiry Form** - Contact form with consultation booking
5. **Technical Support Resources** - 24/7 support, knowledge base, community
6. **FAQ Section** - Frequently asked questions
7. **Emergency Support Banner** - Critical issue contact
8. **Social Media & Newsletter** - Connect and subscribe sections

## Customization

### Adding New Sections

To add new sections, simply extend the component by adding new section components within the `<main>` tag.

### Styling

The component uses Tailwind CSS classes. You can customize colors by modifying the color classes:
- Primary color: `teal-500`, `teal-600`
- Accent colors: Various (blue, red, purple, etc.)

### Form Handling

Currently, the form uses a simple `onSubmit` handler that logs to console. You can customize this in the component:

```tsx
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // Add your form submission logic here
  // Example: send data to API, show success message, etc.
};
```

## Example Implementation

See `app/contact/page.tsx` for a complete implementation example.

## Benefits of This Approach

1. **Maintainability**: Single source of truth for contact page structure
2. **Reusability**: Can be used across multiple pages or sections
3. **Consistency**: Ensures consistent contact experience
4. **Easy Updates**: Update component once, changes reflect everywhere
5. **Type Safety**: Full TypeScript support with proper interfaces
6. **Content Management**: All content in YAML for easy editing

## Dependencies

- React 18+
- Next.js 14+
- Tailwind CSS
- js-yaml (for YAML parsing)

## Notes

- The component is marked as `'use client'` as it includes interactive elements
- All props are marked as `readonly` for immutability
- The component follows React best practices and ESLint rules
- Responsive design works on mobile, tablet, and desktop

## Future Enhancements

Potential improvements:
- Add actual form submission API integration
- Add form validation with libraries like Zod or Yup
- Add success/error toast notifications
- Add loading states during form submission
- Add analytics tracking for form interactions
- Add A/B testing capabilities
