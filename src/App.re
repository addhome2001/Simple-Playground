type state = {
  name: string,
};

type action = ChangeName(string);

let str = ReasonReact.stringToElement;

let valueFromEvent = (event): string => (
  event
  |> ReactEventRe.Form.target
  |> ReactDOMRe.domElementToObj
  )##value;

let component = ReasonReact.reducerComponent("App");

let make = (~greeting, _children) => {
  ...component,
  initialState: () => {name: "World"},
  reducer: (action, _) =>
    switch (action) {
    | ChangeName(name) => ReasonReact.Update({name: name})
    },
  render: ({state: {name}, send}) =>
    <div>
      <div>(str(greeting ++ ", " ++ name))</div>
      <input
        value=name
        _type="text"
        placeholder="Write your name."
        onChange=(e => send(ChangeName(valueFromEvent(e))))
      />
    </div>
};