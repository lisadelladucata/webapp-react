import Button from "../components/ui/Button";
import Heading from "../components/ui/Heading";
import Card from "../components/ui/Card";

export default function DesignSystem() {
  return (
    <>
      <section>
        <Heading level={1}>heading lvl 1</Heading>
        <Heading level={2}>heading lvl 2</Heading>
        <Heading level={3}>heading lvl 3</Heading>
        <Heading level={4}>heading lvl 4</Heading>
        <Heading level={5}>heading lvl 5</Heading>
        <Heading level={6}>heading lvl 6</Heading>
      </section>
      <hr />
      <section>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
      </section>
      <hr />
      <section>
        <Card />
      </section>
    </>
  );
}
