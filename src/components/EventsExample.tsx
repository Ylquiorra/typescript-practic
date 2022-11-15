import React, { FC } from 'react';

export const EventsExample: FC = () => {
  const [value, setValue] = React.useState<string>('');
  const inputRef = React.useRef<HTMLInputElement>(null);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value); // Управляемый input
  };

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(inputRef.current?.value); // неуправляемый input
    console.log(value); // Управляемый input
  };

  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('drag');
  };

  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    (e.target as HTMLInputElement).style.background = 'lightseagreen';
  };

  const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    (e.target as HTMLInputElement).style.background = 'lightsalmon';
  };

  const leaveHelper = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    (e.target as HTMLInputElement).style.background = 'lightseagreen';
  };

  return (
    <>
      <div className="events-example">
        <input ref={inputRef} placeholder="неуправляемый input" type="text" />
        <input placeholder="Управляемый input" type="text" value={value} onChange={changeHandler} />
        <button onClick={clickHandler}>Одно действие для двоих</button>
      </div>

      <div className="events-example-drag-and-drop">
        {[...new Array(3)].map((_, index) => (
          <div
            key={index}
            onDrag={dragHandler}
            onDrop={dropHandler}
            onDragLeave={leaveHelper}
            onDragOver={dragWithPreventHandler}
            draggable
            className="events-example-drag-and-drop__item "></div>
        ))}
      </div>
    </>
  );
};
