import memberss from "../assets/members";
import { MembersProps } from "../types";

const Members = () => {
  const members: MembersProps[] = memberss();

  return (
    <section className="s-members">
      <div className="section">
        <p className="section__title">MEMBERS</p>
        <h2 className="section__desc">Wonderful People</h2>
      </div>
      <table className="s-members__table">
        <thead>
          <tr className="s-members__table__row">
            <th className="s-members__table__header" colSpan={4}>
              Members
            </th>
          </tr>
          <tr className="s-members__table__row">
            <th className="s-members__table__title"></th>
            <th className="s-members__table__title">Details</th>
            <th className="s-members__table__title">Status</th>
            <th className="s-members__table__title">Age</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => (
            <tr key={index} className="s-members__table__row">
              <td className="s-members__table__data">{member.name}</td>
              <td className="s-members__table__data">{member.detail}</td>
              <td className="s-members__table__data">{member.status}</td>
              <td className="s-members__table__data">{member.age}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="s-members__table__row">
            <th className="s-members__table__footer" colSpan={4}>
              They are single, please pick one
            </th>
          </tr>
        </tfoot>
      </table>
    </section>
  );
};

export default Members;
