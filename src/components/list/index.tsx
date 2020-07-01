import * as React from "react";
import { connect } from "react-redux";
import { State } from "../../store";
import { ListState } from "../../store/types";
import { listLoaded } from "../../store/action";

import "./styles.css";

interface ListProps {
  listLoaded: typeof listLoaded;
  listState: ListState;
}

const List: React.FC<ListProps> = ({ listState, listLoaded }) => {
  React.useEffect(() => {
    listLoaded();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="list">
      <div className="item">
        <label>Title</label>
        <span>Status</span>
        <p>Description</p>
        <p>Action</p>
      </div>
      {listState.list.map(({ id, status, title, content }) => (
        <div className="item" key={id}>
          <label>{title}</label>
          <span>{status}</span>
          <p><i>{content}</i></p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state: State): { listState: ListState } => ({
  listState: state.list
});

export default connect(
  mapStateToProps,
  { listLoaded }
)(List);
