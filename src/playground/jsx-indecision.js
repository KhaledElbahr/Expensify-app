console.log('App.js is running🎉')

// JSX - JavaScript XML
// let template = React.createElement(
//     "h1",
//     null,
//     "This is JSX h1 from app.js!"
// );

// let template = (
//   <div>
//     <h1 style={{ fontFamily: 'monospace' }}>
//       This is H1 in JSX from app.js!💻
//     </h1>
//     <p style={{ fontSize: 30, fontFamily: 'monospace' }}>
//       > This is is paragraph.
//     </p>
//   </div>
// );

const styles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0px 50px',
  li: {
    listStyle: 'none',
    padding: 10,
    fontSize: 18,
    cursor: 'pointer'
  }
}

const user = {
    name: 'Khaled Elbahr',
    age: 24,
    location: 'Cairo, Egypt'
}

const app = {
  title: "Indecision App",
  subTitle: "Keep focus on your options",
  options: ['React', 'JSX'],
  links: ["Home", "About", "Projects", "Support", "Contact Me"]
}

const getLocation = (location) => {
    if(location) {
        return <p>Location: {location.split(', ')[0] + ' - '+ location.split(', ')[1]}</p>
    }
}

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;
  console.log(option);
  if(option.trim() !== '') {
    app.options.push(option);
    e.target.reset();
    renderTemplate()
  }
}

const removeAll = () => {
  app.options = [];
  renderTemplate()
}

const onMakeDecision = () => {
  let randomNum = Math.floor(Math.random() * app.options.length);
  let option = app.options[randomNum];
  alert(option);
}

const appRoot = document.getElementById('root');
const root = ReactDOM.createRoot(appRoot);

const renderTemplate = () => {
  const template = (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontFamily: 'monospace',
          boxShadow: '0 .5px'
        }}
      >
        <h1>´Hello Eveybody,
          <pre>{user.name ? user.name : "Visitor"} Here👋`</pre>
        </h1>
        <ul style={styles}>
          {app.links.map((link, i) => (
              <li key={i} style={styles.li}>{link}</li>
          ))}
        </ul>
      </div>
      <div style={{ fontFamily: 'monospace', fontSize: 16 }}>
          <p>Age: {user.age}</p>
          {getLocation(user.location)}
      </div>
      <div>
          <p style={{ fontFamily: 'monospace', fontSize: 16 }}>{(app.options && app.options.length > 0) ? '📃 Here are your options' : 'There is no option yet, add new one +'}</p>
          <ul>
              {app.options.map((option, i) => (
                  <li key={i} style={styles.li}>{i+1} - {option}</li>
              ))}
          </ul>
      </div>
  
      <div style={{ boxShadow: '0 .5px' }}>
        <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
        <button onClick={removeAll}>Remove All Options</button>
        <form onSubmit={onFormSubmit}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    </div>
  )

  root.render(template);
}

renderTemplate()

// ReactDOM.render(template, appRoot);  ==> deprecated
// ReactDOM.hydrateRoot(appRoot, template);
