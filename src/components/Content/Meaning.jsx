export default function Meaning({meaning, handleOnclick}) {

    return (
        <div className="h-full">
            <p className="partOfSpeech flex flex-row after:ml-3 font-semibold italic after:flex-auto after:m-auto after:border-b-2 after:border-solid after:text-zinc-900 text-xl dark:text-zinc-50 mt-8">{meaning.partOfSpeech}</p>
            <p className="text-zinc-500 py-3 text-xl ">Meaning</p>

            {/* definitions */}
            {meaning.definitions.map((definition, index) => <li className="pl-6 py-2 list-disc -indent-5   marker:text-purple-600 dark:text-zinc-50 " key={index}>{definition.definition}</li>)}

            <div className="flex my-5">
                <p className=" text-zinc-500 text-lg mr-3">Synonyms:</p>
                <div className="flex flex-wrap gap-4 mb-8 w-max" >
                    {meaning.synonyms.map((synonym, index) => <div key={index} className="text-purple-600 text-lg cursor-pointer" onClick={() => handleOnclick(synonym)}>{synonym}</div>) }
                </div>
            </div>
          
        </div>
    )
}