import { useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const RepoList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchRepo } = useActions();

  // in docs using TS you cant use useSelector.
  // must create a custom hook useTypeSelector
  const { data, error, loading } = useTypedSelector(
    state => state.repositories
  );

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    searchRepo(term);
    // refactored: dispatch(actionCreators.searchRepo(term));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={e => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h2>Loading...</h2>}
      {!error && !loading && (
        <div>
          {data.map(name => (
            <ul>
              <li key={name}>{name}</li>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
};

export default RepoList;
