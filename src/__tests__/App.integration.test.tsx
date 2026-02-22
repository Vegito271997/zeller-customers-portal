import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { App } from '../App';
import { LIST_ZELLER_CUSTOMERS } from '../graphql';

describe('App Integration', () => {
  const mocks = [
    {
      request: {
        query: LIST_ZELLER_CUSTOMERS,
      },
      result: {
        data: {
          listZellerCustomers: {
            items: [
              {
                id: '1',
                name: 'Jane Admin',
                email: 'admin@test.com',
                role: 'ADMIN',
              },
              {
                id: '2',
                name: 'Mark Manager',
                email: 'manager@test.com',
                role: 'MANAGER',
              },
            ],
          },
        },
      },
    },
  ];

  it('renders admin users by default', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
      </MockedProvider>,
    );

    await waitFor(() => expect(screen.getByText('Jane Admin')).toBeInTheDocument());

    expect(screen.queryByText('Mark Manager')).not.toBeInTheDocument();
  });

  it('switches to manager users when selected', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
      </MockedProvider>,
    );

    await waitFor(() => expect(screen.getByText('Jane Admin')).toBeInTheDocument());

    const managerRadio = screen.getByLabelText(/manager/i);
    fireEvent.click(managerRadio);

    await waitFor(() => expect(screen.getByText('Mark Manager')).toBeInTheDocument());

    expect(screen.queryByText('Jane Admin')).not.toBeInTheDocument();
  });
});
