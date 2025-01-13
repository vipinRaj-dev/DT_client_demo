import { ContentProps } from "../../../constants/Azure";
import Export from "../HelperFunctions/Export";

const Container: React.FC<ContentProps> = ({ accountEntries, imgSrc }) => {
  return (
    <div>
      <div className="ml-[80%] pt-3">
        <Export ExportProp={accountEntries} />
      </div>
      {accountEntries.map((server, index) => (
        <div
          key={index}
          className="relative pl-4 py-2 justify-center my-6 bg-white mx-8 rounded-r rounded-bl border grid grid-cols-4 gap-4"
        >
          <img className="absolute top-0" src={`${imgSrc}`} />
          {Object.entries(server).map(([key, value]) => (
            <div key={key}>
              <h1 className="font-semibold">{key}</h1>
              <div className="text-sm text-neutral-400">
                {Array.isArray(value) ? (
                  value.map((val: string, ind: number) => (
                    <div key={ind}>
                      {ind == 1 ? (
                        <div className="truncate">
                          <a className="underline" href={`${val}`}>
                            {val}
                          </a>
                        </div>
                      ) : (
                        <div>{val}</div>
                      )}
                    </div>
                  ))
                ) : (
                  <div>{value}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Container;
