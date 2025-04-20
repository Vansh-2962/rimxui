import { Typography } from "@/components/Typography";

interface ShowcaseHeaderProps {
  title: string;
  description: string;
}

export const ShowcaseHeader: React.FC<ShowcaseHeaderProps> = ({
  description,
  title,
}) => (
  <div className="flex flex-col gap-2">
    <Typography type="heading" level={1} variant="default" size="2xl">
      {title}
    </Typography>
    <Typography type="text" variant="secondary" size="lg" className="mt-2">
      {description}
    </Typography>
  </div>
);
