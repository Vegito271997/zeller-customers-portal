import type { UserRole } from '../../types/customer';

interface RoleSelectorProps {
  selectedRole: UserRole;
  onRoleChange: (role: UserRole) => void;
}

const roles: { label: string; value: UserRole }[] = [
  { label: 'Admin', value: 'ADMIN' },
  { label: 'Manager', value: 'MANAGER' },
];

export const RoleSelector = ({ selectedRole, onRoleChange }: RoleSelectorProps) => {
  return (
    <fieldset className="space-y-4" aria-labelledby="user-type-legend">
      <legend id="user-type-legend" className="text-xl font-semibold mb-4">
        User Types
      </legend>

      {roles.map((role) => {
        const isSelected = selectedRole === role.value;

        return (
          <label
            key={role.value}
            htmlFor={`role-${role.value}`}
            className={`flex items-center gap-3 p-4 rounded-lg border transition cursor-pointer
              ${
                isSelected
                  ? 'bg-zeller-primaryLight border border-zeller-primary shadow-sm'
                  : 'hover:bg-gray-100'
              }`}
          >
            <input
              id={`role-${role.value}`}
              type="radio"
              name="userRole"
              value={role.value}
              checked={isSelected}
              onChange={() => onRoleChange(role.value)}
              className="accent-zeller-primary"
            />
            <span className="text-lg">{role.label}</span>
          </label>
        );
      })}
    </fieldset>
  );
};
