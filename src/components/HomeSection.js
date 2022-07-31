import { classNames } from "../lib/cssTools";

const PageSection = ({
    title,
    description,
    subheading,
    image,
    reversed,
}) => {
    return (
        <section
            className={classNames(
                "p-12 gap-12 flex justify-around flex-col",
                (reversed ? "md:flex-row-reverse" : "md:flex-row"),
        )}
        >
            <div className="rounded-lg" style={{backgroundColor: "rgba(0, 0, 0, 0.3)"}}>
                <h1 className="text-4xl font-bold">{title}</h1>
                <h3 className="text-xl font-bold text-zinc-700">
                    {subheading}
                </h3>
        
                <p className="text-zinc-900 text-md">{description}</p>
            </div>

            <img
                src={image}
                alt={title}
                className="max-w-[500px] shadow-2xl rounded-lg"
            />
        </section>
    );
};

export default PageSection;