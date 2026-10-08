import axios from 'axios';
import React from 'react';
import update from 'immutability-helper';
import Item from './Item.jsx';
import routes from './routes.js';

// BEGIN (write your solution here)
class TodoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      tasks: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  async componentDidMount() {
    const res = await axios.get(routes.tasksPath());
    this.setState({ tasks: res.data });
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { text } = this.state;
    const trimmed = text.trim();
    if (!trimmed) {
      return;
    }

    const res = await axios.post(routes.tasksPath(), { text: trimmed });
    const newTask = res.data;

    this.setState((prev) => ({
      tasks: [newTask, ...prev.tasks],
      text: '',
    }));
  }

  async handleToggle(id) {
    const { tasks } = this.state;
    const index = tasks.findIndex((task) => task.id === id);
    if (index === -1) {
      return;
    }
    const task = tasks[index];
    const isFinished = task.state === 'finished';

    const url = isFinished
      ? routes.activateTaskPath(id)
      : routes.finishTaskPath(id);

    const res = await axios.patch(url);
    const updatedTask = res.data;

    this.setState((prev) => ({
      tasks: update(prev.tasks, {
        [index]: { $set: updatedTask },
      }),
    }));
  }

  render() {
    const { text, tasks } = this.state;

    const activeTasks = tasks.filter((task) => task.state === 'active');
    const finishedTasks = tasks.filter((task) => task.state === 'finished');

    return (
      <div>
        <div className="mb-3">
          <form className="todo-form mx-3" onSubmit={this.handleSubmit}>
            <div className="d-flex col-md-3">
              <input
                type="text"
                value={text}
                required
                className="form-control me-3"
                placeholder="I am going..."
                onChange={this.handleChange}
              />
              <button type="submit" className="btn btn-primary">add</button>
            </div>
          </form>
        </div>
        {activeTasks.length > 0 && (
          <div className="todo-active-tasks">
            {activeTasks.map((task) => (
              <Item key={task.id} task={task} onToggle={this.handleToggle} />
            ))}
          </div>
        )}
        {finishedTasks.length > 0 && (
          <div className="todo-finished-tasks">
            {finishedTasks.map((task) => (
              <Item key={task.id} task={task} onToggle={this.handleToggle} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default TodoBox;
// END
