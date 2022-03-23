import { useState } from 'react';

import { useActions } from '../hooks/useActions';

const RepoList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchRepo } = useActions();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {

    event.preventDefault();

    searchRepo(term);
    // refactored: dispatch(actionCreators.searchRepo(term));
  };

  return (
    <form onSubmit={onSubmit}>
      <input value={term} onChange={(e) => setTerm(e.target.value)}/>
      <button>Search</button>
    </form>
  );
};

export default RepoList;