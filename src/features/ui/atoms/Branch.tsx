import React, { ReactElement, Children } from 'react';

interface BranchProps {
  condition: boolean;
  children: ReactElement[];
}

const Branch: React.FC<BranchProps> = ({
  condition,
  children,
}: BranchProps): ReactElement => {
  const [thenBranch, elseBranch, ...extra] = Children.toArray(children);

  if (extra.length > 0) {
    throw new Error(
      'Branch receives two React Nodes. You passed more. Use <></> to wrap your elements',
    );
  }

  const result = condition ? thenBranch : elseBranch;

  return React.isValidElement(result) ? result : <div>{result}</div>;
};

export default Branch;
