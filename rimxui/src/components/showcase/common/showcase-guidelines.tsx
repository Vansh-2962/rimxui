import { Typography } from "@/components/Typography";
import { List, ListItem } from "@/components/List";

interface GuidelineItem {
  title: string;
  description: string;
}

interface ShowcaseGuidelinesProps {
  title?: string;
  description?: string;
  bestPractices: GuidelineItem[];
  thingsToAvoid: GuidelineItem[];
}

export const ShowcaseGuidelines: React.FC<ShowcaseGuidelinesProps> = ({
  title = "Guidelines",
  description = "Follow these guidelines to create consistent and accessible components.",
  bestPractices,
  thingsToAvoid,
}) => {
  return (
    <div className="space-y-8">
      <div>
        <Typography type="heading" level={2} variant="default" size="xl">
          {title}
        </Typography>
        <Typography type="text" variant="secondary" size="md" className="mt-2">
          {description}
        </Typography>
      </div>

      <div className="space-y-6">
        <div>
          <Typography type="heading" level={3} variant="default" size="lg">
            Best Practices
          </Typography>
          <div className="mt-4">
            <List variant="default" listType="plain" spacing="medium">
              {bestPractices.map((practice, index) => (
                <ListItem key={index} disableGutters>
                  <div className="flex px-2 items-start">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30">
                      <Typography
                        type="text"
                        size="2xl"
                        color="green"
                        weight="bold"
                      >
                        ✓
                      </Typography>
                    </div>
                    <div className="ml-4">
                      <Typography
                        type="heading"
                        level={4}
                        size="md"
                        variant="dark"
                        weight="semibold"
                      >
                        {practice.title}
                      </Typography>
                      <Typography
                        type="text"
                        variant="secondary"
                        size="md"
                        className="mt-1"
                      >
                        {practice.description}
                      </Typography>
                    </div>
                  </div>
                </ListItem>
              ))}
            </List>
          </div>
        </div>

        <div>
          <Typography type="heading" level={3} variant="default" size="lg">
            Things to Avoid
          </Typography>
          <div className="mt-4">
            <List variant="default" listType="plain" spacing="medium">
              {thingsToAvoid.map((avoid, index) => (
                <ListItem key={index} disableGutters>
                  <div className="flex px-2 items-start">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-900/30">
                      <Typography
                        type="text"
                        size="2xl"
                        color="#e11d48"
                        weight="bold"
                      >
                        ✗
                      </Typography>
                    </div>
                    <div className="ml-4">
                      <Typography
                        type="heading"
                        level={4}
                        variant="dark"
                        size="md"
                        weight="semibold"
                      >
                        {avoid.title}
                      </Typography>
                      <Typography
                        type="text"
                        variant="secondary"
                        size="md"
                        className="mt-1"
                      >
                        {avoid.description}
                      </Typography>
                    </div>
                  </div>
                </ListItem>
              ))}
            </List>
          </div>
        </div>
      </div>
    </div>
  );
};
