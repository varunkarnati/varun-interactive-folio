const TechOrbs = () => {
  const orbs = [
    { top: "10%", left: "15%", delay: "0s", size: "w-32 h-32" },
    { top: "30%", right: "10%", delay: "1s", size: "w-40 h-40" },
    { bottom: "20%", left: "20%", delay: "2s", size: "w-36 h-36" },
    { top: "60%", right: "25%", delay: "1.5s", size: "w-28 h-28" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((orb, index) => (
        <div
          key={index}
          className={`absolute ${orb.size} rounded-full bg-primary/5 blur-2xl animate-float`}
          style={{
            top: orb.top,
            left: orb.left,
            right: orb.right,
            bottom: orb.bottom,
            animationDelay: orb.delay,
            animationDuration: "8s",
          }}
        />
      ))}
    </div>
  );
};

export default TechOrbs;
