import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Popup = ({ data, onClose }) => {
  //2xl:w-1/2 xl:w-2/3 lg:w-9/12 md:w-11/12 xxs:w-full
  return (
    <div className="fixed inset-0 lg:w-1/2 md:w-5/6 xxs:w-full lg:h-2/3 md:h-5/6 xxs:h-11/12  m-auto flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg relative w-full h-full animate-fade overflow-scroll">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
        >
          <FontAwesomeIcon icon={faClose} size="2xl" />
        </button>
        <div className="flex md:flex-row xxs:flex-col">
          <aside className="md:basis-1/2 me-10">
            <img
              src={`${process.env.PUBLIC_URL}/assets/capsule.jpg`}
              alt="capsule"
              className="w-full h-full md:m-0 xxs:mb-5"
            />
          </aside>
          <article className="md:basis-1/2">
            {Object.keys(data).map((key, idx) => {
              const value = data[key];
              if (value !== null && value !== undefined) {
                return (
                  <div key={idx} className="mb-3">
                    <strong>{key}: </strong>
                    {key === "missions" ? (
                      <ul>
                        {value.length > 0 ? (
                          value.map((mission, missionIdx) => (
                            <li key={missionIdx}>
                              <strong>Mission Name:</strong> {mission.name},
                              <strong> Flight:</strong> {mission.flight}
                            </li>
                          ))
                        ) : (
                          <p>no missions</p>
                        )}
                      </ul>
                    ) : (
                      <span>
                        {key === "original_launch" ? value.slice(0, 10) : value}
                      </span>
                    )}
                    <hr className="mt-2" />
                  </div>
                );
              }
              return null;
            })}
          </article>
        </div>
      </div>
    </div>
  );
};

export default Popup;
