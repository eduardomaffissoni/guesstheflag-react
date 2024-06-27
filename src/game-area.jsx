/* eslint-disable react/prop-types */
export function Leaderboard({ players }) {
  const playerList = players.map((e) => (
    <li className='p-2 flex border-b border-sky-900' key={players.indexOf(e)}>
      <p>{e.name}</p> <p className='ml-auto'>{e.points}</p>
    </li>
  ));
  return (
    <div className='p-2  min-h-96 w-1/5 bg-sky-200 my-auto h-4/5 rounded-xl text-sky-950 text-lg font-bold'>
      <ul>{playerList}</ul>
    </div>
  );
}

export function FlagArea({
  country,
  counter,
  roundEnding,
  rightAnswer,
  handleInput,
  handleSubmit,
  input,
}) {
  const flagUrl = `https://countryflagsapi.netlify.app/flag/${country[1]}.svg`;
  return (
    <div className='w-4/12 relative mt-6 mx-auto overflow-hidden flex flex-col place-content-between'>
      <p
        className={` mx-auto text-3xl font-bold ${
          roundEnding
            ? rightAnswer.current
              ? 'text-emerald-600'
              : 'text-red-700'
            : 'text-sky-900'
        } `}
      >
        {roundEnding ? 'Próxima rodada: ' : ''} {(counter / 100).toFixed(0)}s
      </p>
      <div className='relative mx-auto overflow-hidden flex flex-col'>
        <div
          className={`h-7 ${
            counter < 1001 ? 'rounded-tl-xl' : 'rounded-t-xl'
          } ${
            roundEnding
              ? rightAnswer.current
                ? 'bg-emerald-500'
                : 'bg-red-700'
              : 'bg-sky-950'
          }`}
          style={{
            width: `${
              roundEnding
                ? (Math.min(counter, 1000) * 2 - 700) / 3
                : (Math.min(counter, 1000) - 700) / 3
            }%`,
          }}
        ></div>
        <div className='flex w-full overflow-hidden relative pb-7 rounded-bl-xl'>
          <div
            className={`${
              roundEnding
                ? rightAnswer.current
                  ? 'bg-emerald-500'
                  : 'bg-red-700'
                : 'bg-sky-950'
            } w-7 absolute bottom-0`}
            style={{
              height: `${
                roundEnding ? (counter * 2 - 500) / 2 : (counter - 500) / 2
              }%`,
            }}
          ></div>
          <img className='object-cover w-11/12 ml-7 pr' src={flagUrl} />
          <div
            className={`h-80 ${
              roundEnding
                ? rightAnswer.current
                  ? 'bg-emerald-500'
                  : 'bg-red-700'
                : 'bg-sky-950'
            } absolute right-0 w-7 max-h-[91.4%]`}
            style={{
              height: `${
                roundEnding ? (counter * 2 - 30) / 2 : (counter - 30) / 2
              }%`,
            }}
          ></div>
        </div>
        <div
          className={`h-7 ${
            roundEnding
              ? rightAnswer.current
                ? 'bg-emerald-500'
                : 'bg-red-700'
              : 'bg-sky-950'
          } absolute bottom-0 right-0 rounded-br-xl max-w-[96%]`}
          style={{
            width: `${
              roundEnding ? (counter * 2 - 210) / 3 : (counter - 210) / 3
            }%`,
          }}
        ></div>
      </div>
      <InputArea
        handleInput={handleInput}
        handleSubmit={handleSubmit}
        input={input}
      />
    </div>
  );
}

export function AnswersArea({ answers }) {
  const answersList = answers.map((e) => (
    <li className='list-none' key={e.id}>
      <strong>{e.player}</strong>: {e.message}
    </li>
  ));
  return (
    <ul className='w-1/5 h-4/5 my-auto  p-5 overflow-y-scroll rounded-xl  text-sky-950 text-lg bg-sky-200'>
      {answersList}
    </ul>
  );
}

function InputArea({ handleSubmit, handleInput, input }) {
  return (
    <div className='w-full flex mb-1'>
      <form onSubmit={handleSubmit} className='flex mx-auto w-full'>
        <input
          autoFocus
          className='border outline-none focus:border-t-2 focus:border-l-2 focus:border-b-2 w-full p-2 border-sky-950 rounded-l-lg'
          value={input}
          onChange={handleInput}
        />{' '}
        <button className='p-4 bg-sky-950 text-white text-xl font-bold rounded-r-lg'>
          Enviar
        </button>
      </form>
    </div>
  );
}

export function MainArea({
  country,
  players,
  answers,
  counter,
  roundEnding,
  rightAnswer,
  handleInput,
  handleSubmit,
  input,
}) {
  return (
    <div className='flex h-full place-content-between overflow-hidden'>
      <Leaderboard players={players} />
      <FlagArea
        country={country}
        counter={counter}
        roundEnding={roundEnding}
        rightAnswer={rightAnswer}
        input={input}
        handleSubmit={handleSubmit}
        handleInput={handleInput}
      />
      <AnswersArea answers={answers} />
    </div>
  );
}
