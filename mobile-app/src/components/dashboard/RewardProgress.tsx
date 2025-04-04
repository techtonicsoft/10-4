import React from 'react';

interface RewardProgressProps {
  points: number;
}

const RewardProgress = ({ points }: RewardProgressProps) => {
  // Define milestone points
  const milestones = [
    { points: 150, type: 'regular' },
    { points: 250, type: 'regular' },
    { points: 400, type: 'regular' },
    { points: 500, type: 'bronze' },
    { points: 750, type: 'silver' },
    { points: 1250, type: 'gold' }
  ];

  // Calculate progress percentage
  const maxPoints = milestones[milestones.length - 1].points;
  const progressWidth = Math.min((points / maxPoints) * 100, 100);

  // Remaining points to reach bronze
  const pointsToBronze = 500 - points > 0 ? 500 - points : 0;

  return (
    <div className="my-4">
      {/* Progress text */}
      <div className="flex justify-between mb-1 text-sm">
        <p className="font-medium text-gray-700">
          {pointsToBronze > 0 ? `${pointsToBronze} points to Bronze` : 'Bronze achieved!'}
        </p>
        <p className="text-gray-600">1 gallon = 1 point</p>
      </div>

      {/* Progress bar track */}
      <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
        {/* Progress fill */}
        <div
          className="absolute top-0 left-0 h-full bg-teal-500"
          style={{ width: `${progressWidth}%` }}
        ></div>

        {/* Milestone markers */}
        <div className="absolute top-0 left-0 h-full w-full flex items-center">
          {milestones.map((milestone, index) => {
            const position = (milestone.points / maxPoints) * 100;
            return (
              <div
                key={index}
                className="absolute flex flex-col items-center"
                style={{ left: `${position}%` }}
              >
                <div
                  className={`w-3 h-3 rounded-full border border-white z-10
                    ${milestone.type === 'bronze' ? 'bg-amber-700' :
                      milestone.type === 'silver' ? 'bg-gray-400' :
                      milestone.type === 'gold' ? 'bg-yellow-500' : 'bg-gray-700'}`}
                ></div>
                <p className="absolute top-5 text-[10px] text-gray-600 transform -translate-x-1/2">
                  {milestone.points}
                </p>
                {milestone.type !== 'regular' && (
                  <div className="absolute -top-6 w-6 h-6">
                    <svg className={`w-6 h-6 ${
                      milestone.type === 'bronze' ? 'text-amber-700' :
                      milestone.type === 'silver' ? 'text-gray-400' :
                      'text-yellow-500'
                    }`} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.23 6C11.0511 6.00224 10.8747 6.03898 10.7161 6.10699C10.5575 6.175 10.4212 6.27259 10.32 6.39L8.31 8.8L5.54 9.24C5.39554 9.26538 5.25766 9.31957 5.13868 9.39892C5.01971 9.47827 4.92219 9.58076 4.85351 9.6988C4.78483 9.81683 4.74684 9.9475 4.74264 10.0806C4.73844 10.2137 4.76812 10.3461 4.83 10.47L6.73 13.18L6.23 15.94C6.20094 16.0837 6.20503 16.2323 6.24194 16.3741C6.27884 16.5158 6.3475 16.6467 6.44287 16.7556C6.53824 16.8646 6.65761 16.9487 6.79153 17.0013C6.92546 17.0538 7.0708 17.0734 7.21 17.06C7.34553 17.0609 7.47963 17.0337 7.6 16.98L10 15.72L12.39 16.98C12.5104 17.0337 12.6444 17.0609 12.78 17.06C12.9192 17.0734 13.0645 17.0538 13.1985 17.0013C13.3324 16.9487 13.4518 16.8646 13.5471 16.7556C13.6425 16.6467 13.7112 16.5158 13.7481 16.3741C13.785 16.2323 13.7891 16.0837 13.76 15.94L13.26 13.18L15.16 10.47C15.2219 10.3461 15.2516 10.2137 15.2474 10.0806C15.2432 9.9475 15.2052 9.81683 15.1365 9.6988C15.0678 9.58076 14.9703 9.47827 14.8513 9.39892C14.7323 9.31957 14.5945 9.26538 14.45 9.24L11.68 8.8L9.68 6.39C9.57859 6.27259 9.44213 6.175 9.28352 6.10699C9.12491 6.03898 8.94853 6.00224 8.77 6H11.23Z" />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RewardProgress;
