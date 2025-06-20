// import { useEffect, useState } from 'react';
// import { collection, getDocs } from 'firebase/firestore';
// import { db } from './config/firebase';

// const ToDepartments = () => {
//   const [departmentStats, setDepartmentStats] = useState([]);
//   const [totalUsers, setTotalUsers] = useState(0);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchUserDepartments = async () => {
//       try {
//         const usersSnapshot = await getDocs(collection(db, "Users"));
//         const deptCounts = {};
//         let total = 0;

//         usersSnapshot.forEach(doc => {
//           const data = doc.data();
//           const dept = data.department;

//           if (dept) {
//             deptCounts[dept] = (deptCounts[dept] || 0) + 1;
//             total += 1;
//           }
//         });

//         const sorted = Object.entries(deptCounts)
//           .sort((a, b) => b[1] - a[1])
//           .slice(0, 5)
//           .map(([dept, count]) => ({
//             name: dept,
//             count,
//             percent: ((count / total) * 100).toFixed(1)
//           }));

//         setDepartmentStats(sorted);
//         setTotalUsers(total);
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching users:", err);
//         setLoading(false);
//       }
//     };

//     fetchUserDepartments();
//   }, []);

//   if (loading) return <p className="text-center mt-10"></p>;

//   return (
//     <div className=" rounded-lg px-3 max-w-3xl mx-auto border-gray">
//   <h1 className="text-2xl font-bold text-center">Top 5 Departments Registered</h1>
//   {departmentStats.map((dept, index) => (
//     <div key={index} className="mb-4 mt-2">
//       <h2 className="font-bold text-lg ">{dept.name}</h2>
//       <div className="relative h-3 w-full bg-whitesmoke  rounded overflow-hidden">
//         <div
//           className="absolute top-0 left-0 h-full bg-grays"
//           style={{ width: `${dept.percent}%` }}
//         ></div>
//       </div>
//       <p className="mt-1 text-sm text-grays">
//          {dept.percent}% of total registrations
//       </p>
//     </div>
//   ))}
// </div>

//   );
// };

// export default ToDepartments;








import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './config/firebase';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

const ToDepartments = () => {
  const [departmentStats, setDepartmentStats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserDepartments = async () => {
      try {
        const usersSnapshot = await getDocs(collection(db, 'Users'));
        const deptCounts = {};
        let total = 0;

        usersSnapshot.forEach((doc) => {
          const data = doc.data();
          const dept = data.department;

          if (dept) {
            deptCounts[dept] = (deptCounts[dept] || 0) + 1;
            total += 1;
          }
        });

        const sorted = Object.entries(deptCounts)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
          .map(([dept, count]) => ({
            name: dept,
            count,
            percent: parseFloat(((count / total) * 100).toFixed(1)),
          }));

        setDepartmentStats(sorted);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching users:', err);
        setLoading(false);
      }
    };

    fetchUserDepartments();
  }, []);

  if (loading) return <p className="text-center mt-10"></p>;

  return (
    <div className="mx-5 mt-5 border-whites border-[1.5px] shadow-sm rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-6 mt-4">Top 5 Departments Registered</h1>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart data={departmentStats} margin={{ top: 10, right: 30, left: 20, bottom: 40 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" label={{ value: 'Departments', position: 'insideBottom', dy: 20 }} />
          <YAxis label={{ value: 'Users (%)', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Bar dataKey="percent" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ToDepartments;
