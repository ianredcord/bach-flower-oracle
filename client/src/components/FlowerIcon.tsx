import React from 'react';

interface FlowerIconProps {
  remedyId: number;
  className?: string;
  color?: string;
}

export const FlowerIcon: React.FC<FlowerIconProps> = ({ remedyId, className = "w-12 h-12", color = "currentColor" }) => {
  // Generate a unique seed based on remedyId to create consistent but distinct variations
  // This is a simplified approach - ideally we would have specific drawings for each
  // But to ensure visual distinction without 38 separate assets, we'll use procedural generation
  // combined with specific traits for each flower type
  
  const getPathForRemedy = (id: number) => {
    switch (id) {
      // 1. Rock Rose (岩玫瑰) - Panic, Terror
      case 1: return (
        <g>
          <path d="M12 20C12 20 8 14 8 10C8 6 12 2 12 2C12 2 16 6 16 10C16 14 12 20 12 20Z" fill="none" stroke={color} strokeWidth="1.5" />
          <path d="M12 20C12 20 6 16 4 12C2 8 6 4 6 4C6 4 10 8 12 20Z" fill="none" stroke={color} strokeWidth="1.5" />
          <path d="M12 20C12 20 18 16 20 12C22 8 18 4 18 4C18 4 14 8 12 20Z" fill="none" stroke={color} strokeWidth="1.5" />
          <circle cx="12" cy="10" r="1" fill={color} />
        </g>
      );
      
      // 2. Mimulus (溝酸醬) - Known fears
      case 2: return (
        <g>
          <path d="M12 22V12" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
          <path d="M12 12L8 8C6 6 8 4 10 6L12 12Z" fill="none" stroke={color} strokeWidth="1.5" />
          <path d="M12 12L16 8C18 6 16 4 14 6L12 12Z" fill="none" stroke={color} strokeWidth="1.5" />
          <path d="M12 12L9 16C7 18 9 20 11 18L12 12Z" fill="none" stroke={color} strokeWidth="1.5" />
          <path d="M12 12L15 16C17 18 15 20 13 18L12 12Z" fill="none" stroke={color} strokeWidth="1.5" />
        </g>
      );

      // 3. Cherry Plum (櫻桃李) - Fear of losing control
      case 3: return (
        <g>
          <path d="M12 22V14" stroke={color} strokeWidth="1.5" />
          <circle cx="12" cy="10" r="4" fill="none" stroke={color} strokeWidth="1.5" />
          <circle cx="12" cy="10" r="1.5" fill={color} />
          <path d="M12 6V2" stroke={color} strokeWidth="1.5" />
          <path d="M16 10H20" stroke={color} strokeWidth="1.5" />
          <path d="M8 10H4" stroke={color} strokeWidth="1.5" />
          <path d="M15 7L18 4" stroke={color} strokeWidth="1.5" />
          <path d="M9 7L6 4" stroke={color} strokeWidth="1.5" />
          <path d="M15 13L18 16" stroke={color} strokeWidth="1.5" />
          <path d="M9 13L6 16" stroke={color} strokeWidth="1.5" />
        </g>
      );

      // 4. Aspen (白楊) - Unknown fears
      case 4: return (
        <g>
          <path d="M12 22V10" stroke={color} strokeWidth="1.5" />
          <path d="M12 10C12 10 8 8 6 10C4 12 6 16 12 20C18 16 20 12 18 10C16 8 12 10 12 10Z" fill="none" stroke={color} strokeWidth="1.5" />
          <path d="M12 10V4" stroke={color} strokeWidth="1.5" />
          <path d="M12 4L10 2" stroke={color} strokeWidth="1.5" />
          <path d="M12 4L14 2" stroke={color} strokeWidth="1.5" />
        </g>
      );

      // 5. Red Chestnut (紅栗花) - Over-concern for others
      case 5: return (
        <g>
          <path d="M12 22V12" stroke={color} strokeWidth="1.5" />
          <path d="M12 12L8 6C8 6 6 4 8 2C10 0 12 4 12 4C12 4 14 0 16 2C18 4 16 6 16 6L12 12Z" fill="none" stroke={color} strokeWidth="1.5" />
          <path d="M12 16L8 14" stroke={color} strokeWidth="1.5" />
          <path d="M12 16L16 14" stroke={color} strokeWidth="1.5" />
        </g>
      );

      // 6. Cerato (水蕨) - Seeking advice
      case 6: return (
        <g>
          <path d="M12 22V14" stroke={color} strokeWidth="1.5" />
          <path d="M12 14L7 9C7 9 5 7 7 5C9 3 12 8 12 8C12 8 15 3 17 5C19 7 17 9 17 9L12 14Z" fill="none" stroke={color} strokeWidth="1.5" />
          <circle cx="12" cy="4" r="1" fill={color} />
        </g>
      );

      // 7. Scleranthus (線球草) - Indecision
      case 7: return (
        <g>
          <path d="M12 22V16" stroke={color} strokeWidth="1.5" />
          <path d="M12 16C12 16 8 14 8 10C8 6 12 16 12 16Z" fill="none" stroke={color} strokeWidth="1.5" />
          <path d="M12 16C12 16 16 14 16 10C16 6 12 16 12 16Z" fill="none" stroke={color} strokeWidth="1.5" />
          <circle cx="8" cy="8" r="1.5" fill="none" stroke={color} strokeWidth="1.5" />
          <circle cx="16" cy="8" r="1.5" fill="none" stroke={color} strokeWidth="1.5" />
        </g>
      );

      // 8. Gentian (龍膽) - Discouragement
      case 8: return (
        <g>
          <path d="M12 22V12" stroke={color} strokeWidth="1.5" />
          <path d="M12 12L9 6L12 2L15 6L12 12Z" fill="none" stroke={color} strokeWidth="1.5" />
          <path d="M9 6L6 8" stroke={color} strokeWidth="1.5" />
          <path d="M15 6L18 8" stroke={color} strokeWidth="1.5" />
        </g>
      );

      // 9. Gorse (荊豆) - Hopelessness
      case 9: return (
        <g>
          <path d="M12 22V14" stroke={color} strokeWidth="1.5" />
          <path d="M12 14L8 10L12 6L16 10L12 14Z" fill="none" stroke={color} strokeWidth="1.5" />
          <path d="M8 10L4 8" stroke={color} strokeWidth="1.5" />
          <path d="M16 10L20 8" stroke={color} strokeWidth="1.5" />
          <path d="M12 6V2" stroke={color} strokeWidth="1.5" />
        </g>
      );

      // 10. Hornbeam (鵝耳櫪) - Monday morning feeling
      case 10: return (
        <g>
          <path d="M12 22V10" stroke={color} strokeWidth="1.5" />
          <path d="M12 10L8 6C8 6 6 4 8 4C10 4 12 10 12 10Z" fill="none" stroke={color} strokeWidth="1.5" />
          <path d="M12 10L16 6C16 6 18 4 16 4C14 4 12 10 12 10Z" fill="none" stroke={color} strokeWidth="1.5" />
          <path d="M12 16L8 14" stroke={color} strokeWidth="1.5" />
          <path d="M12 16L16 14" stroke={color} strokeWidth="1.5" />
        </g>
      );

      // 11. Wild Oat (野燕麥) - Uncertainty over direction
      case 11: return (
        <g>
          <path d="M12 22V4" stroke={color} strokeWidth="1.5" />
          <path d="M12 18L8 14" stroke={color} strokeWidth="1.5" />
          <path d="M12 14L16 10" stroke={color} strokeWidth="1.5" />
          <path d="M12 10L8 6" stroke={color} strokeWidth="1.5" />
          <path d="M12 6L16 2" stroke={color} strokeWidth="1.5" />
          <circle cx="8" cy="14" r="1" fill={color} />
          <circle cx="16" cy="10" r="1" fill={color} />
          <circle cx="8" cy="6" r="1" fill={color} />
          <circle cx="16" cy="2" r="1" fill={color} />
        </g>
      );

      // 12. Clematis (鐵線蓮) - Dreaminess
      case 12: return (
        <g>
          <path d="M12 22C12 22 8 18 8 12C8 6 12 2 12 2C12 2 16 6 16 12C16 18 12 22 12 22Z" fill="none" stroke={color} strokeWidth="1.5" />
          <path d="M8 12H16" stroke={color} strokeWidth="1.5" />
          <path d="M12 6V18" stroke={color} strokeWidth="1.5" />
          <circle cx="12" cy="12" r="2" fill="none" stroke={color} strokeWidth="1.5" />
        </g>
      );

      // 13. Honeysuckle (忍冬) - Living in the past
      case 13: return (
        <g>
          <path d="M12 22V12" stroke={color} strokeWidth="1.5" />
          <path d="M12 12C12 12 8 10 6 6C4 2 8 2 10 4L12 12Z" fill="none" stroke={color} strokeWidth="1.5" />
          <path d="M12 12C12 12 16 10 18 6C20 2 16 2 14 4L12 12Z" fill="none" stroke={color} strokeWidth="1.5" />
          <path d="M10 4C10 4 8 0 12 0C16 0 14 4 14 4" fill="none" stroke={color} strokeWidth="1.5" />
        </g>
      );

      // 14. Wild Rose (野玫瑰) - Resignation, apathy
      case 14: return (
        <g>
          <path d="M12 22V14" stroke={color} strokeWidth="1.5" />
          <circle cx="12" cy="9" r="5" fill="none" stroke={color} strokeWidth="1.5" />
          <circle cx="12" cy="9" r="2" fill={color} />
          <path d="M12 4V2" stroke={color} strokeWidth="1.5" />
          <path d="M17 9H19" stroke={color} strokeWidth="1.5" />
          <path d="M7 9H5" stroke={color} strokeWidth="1.5" />
          <path d="M15.5 12.5L17 14" stroke={color} strokeWidth="1.5" />
          <path d="M8.5 12.5L7 14" stroke={color} strokeWidth="1.5" />
        </g>
      );

      // 15. Olive (橄欖) - Exhaustion
      case 15: return (
        <g>
          <path d="M12 22V4" stroke={color} strokeWidth="1.5" />
          <ellipse cx="12" cy="8" rx="3" ry="5" fill="none" stroke={color} strokeWidth="1.5" />
          <path d="M12 14L8 12" stroke={color} strokeWidth="1.5" />
          <path d="M12 18L16 16" stroke={color} strokeWidth="1.5" />
          <ellipse cx="7" cy="11" rx="2" ry="3" fill="none" stroke={color} strokeWidth="1.5" transform="rotate(-30 7 11)" />
          <ellipse cx="17" cy="15" rx="2" ry="3" fill="none" stroke={color} strokeWidth="1.5" transform="rotate(30 17 15)" />
        </g>
      );

      // 16. White Chestnut (白栗花) - Unwanted thoughts
      case 16: return (
        <g>
          <path d="M12 22V12" stroke={color} strokeWidth="1.5" />
          <path d="M12 12L8 6C8 6 6 4 8 2C10 0 12 4 12 4C12 4 14 0 16 2C18 4 16 6 16 6L12 12Z" fill="none" stroke={color} strokeWidth="1.5" />
          <circle cx="12" cy="8" r="1" fill={color} />
          <path d="M8 6L6 8" stroke={color} strokeWidth="1.5" />
          <path d="M16 6L18 8" stroke={color} strokeWidth="1.5" />
        </g>
      );

      // 17. Mustard (芥子) - Deep gloom
      case 17: return (
        <g>
          <path d="M12 22V10" stroke={color} strokeWidth="1.5" />
          <path d="M12 10L9 6L12 2L15 6L12 10Z" fill="none" stroke={color} strokeWidth="1.5" />
          <path d="M9 6L6 6" stroke={color} strokeWidth="1.5" />
          <path d="M15 6L18 6" stroke={color} strokeWidth="1.5" />
          <path d="M12 16L8 14" stroke={color} strokeWidth="1.5" />
          <path d="M12 16L16 14" stroke={color} strokeWidth="1.5" />
        </g>
      );

      // 18. Chestnut Bud (栗樹芽苞) - Failure to learn
      case 18: return (
        <g>
          <path d="M12 22V8" stroke={color} strokeWidth="1.5" />
          <path d="M12 8C12 8 8 6 8 4C8 2 10 2 12 4C14 2 16 2 16 4C16 6 12 8 12 8Z" fill="none" stroke={color} strokeWidth="1.5" />
          <path d="M12 14L8 10" stroke={color} strokeWidth="1.5" />
          <path d="M8 10C8 10 6 8 6 7C6 6 7 6 8 7L12 14Z" fill="none" stroke={color} strokeWidth="1.5" />
        </g>
      );

      // 19. Water Violet (水蓳) - Pride, aloofness
      case 19: return (
        <g>
          <path d="M12 22V12" stroke={color} strokeWidth="1.5" />
          <path d="M12 12L9 8C9 8 8 6 9 5C10 4 12 6 12 6C12 6 14 4 15 5C16 6 15 8 15 8L12 12Z" fill="none" stroke={color} strokeWidth="1.5" />
          <path d="M12 6V2" stroke={color} strokeWidth="1.5" />
          <path d="M12 16L8 14" stroke={color} strokeWidth="1.5" />
          <path d="M12 16L16 14" stroke={color} strokeWidth="1.5" />
        </g>
      );

      // 20. Impatiens (鳳仙花) - Impatience
      case 20: return (
        <g>
          <path d="M12 22V12" stroke={color} strokeWidth="1.5" />
          <path d="M12 12L8 6C8 6 6 2 8 2C10 2 12 6 12 6C12 6 14 2 16 2C18 2 16 6 16 6L12 12Z" fill="none" stroke={color} strokeWidth="1.5" />
          <path d="M12 12L10 16" stroke={color} strokeWidth="1.5" />
          <path d="M12 12L14 16" stroke={color} strokeWidth="1.5" />
        </g>
      );

      // 21. Heather (石南) - Self-centredness
      case 21: return (
        <g>
          <path d="M12 22V4" stroke={color} strokeWidth="1.5" />
          <circle cx="12" cy="4" r="2" fill={color} />
          <circle cx="12" cy="8" r="2" fill={color} />
          <circle cx="12" cy="12" r="2" fill={color} />
          <path d="M12 16L8 14" stroke={color} strokeWidth="1.5" />
          <path d="M12 16L16 14" stroke={color} strokeWidth="1.5" />
        </g>
      );

      // 22. Agrimony (龍芽草) - Mental torture behind a brave face
      case 22: return (
        <g>
          <path d="M12 22V4" stroke={color} strokeWidth="1.5" />
          <path d="M12 4L10 2" stroke={color} strokeWidth="1.5" />
          <path d="M12 4L14 2" stroke={color} strokeWidth="1.5" />
          <path d="M12 8L8 6" stroke={color} strokeWidth="1.5" />
          <path d="M12 8L16 6" stroke={color} strokeWidth="1.5" />
          <path d="M12 12L8 10" stroke={color} strokeWidth="1.5" />
          <path d="M12 12L16 10" stroke={color} strokeWidth="1.5" />
          <path d="M12 16L8 14" stroke={color} strokeWidth="1.5" />
          <path d="M12 16L16 14" stroke={color} strokeWidth="1.5" />
        </g>
      );

      // 23. Centaury (矢車菊) - Weak-willed, subservient
      case 23: return (
        <g>
          <path d="M12 22V12" stroke={color} strokeWidth="1.5" />
          <path d="M12 12L9 8L12 4L15 8L12 12Z" fill="none" stroke={color} strokeWidth="1.5" />
          <path d="M9 8L6 6" stroke={color} strokeWidth="1.5" />
          <path d="M15 8L18 6" stroke={color} strokeWidth="1.5" />
          <circle cx="12" cy="8" r="1" fill={color} />
        </g>
      );

      // 24. Walnut (胡桃) - Protection from change
      case 24: return (
        <g>
          <path d="M12 22V14" stroke={color} strokeWidth="1.5" />
          <path d="M12 14C12 14 8 12 8 8C8 4 10 2 12 2C14 2 16 4 16 8C16 12 12 14 12 14Z" fill="none" stroke={color} strokeWidth="1.5" />
          <path d="M8 8H16" stroke={color} strokeWidth="1.5" />
          <path d="M12 2V14" stroke={color} strokeWidth="1.5" />
        </g>
      );

      // 25. Holly (冬青) - Hatred, envy, jealousy
      case 25: return (
        <g>
          <path d="M12 22V14" stroke={color} strokeWidth="1.5" />
          <path d="M12 14L8 10C8 10 6 12 4 10C2 8 4 6 6 6C8 6 10 8 12 10Z" fill="none" stroke={color} strokeWidth="1.5" />
          <path d="M12 14L16 10C16 10 18 12 20 10C22 8 20 6 18 6C16 6 14 8 12 10Z" fill="none" stroke={color} strokeWidth="1.5" />
          <circle cx="12" cy="8" r="1.5" fill={color} />
        </g>
      );

      // 26. Larch (落葉松) - Lack of confidence
      case 26: return (
        <g>
          <path d="M12 22V2" stroke={color} strokeWidth="1.5" />
          <path d="M12 6L8 8" stroke={color} strokeWidth="1.5" />
          <path d="M12 6L16 8" stroke={color} strokeWidth="1.5" />
          <path d="M12 10L7 13" stroke={color} strokeWidth="1.5" />
          <path d="M12 10L17 13" stroke={color} strokeWidth="1.5" />
          <path d="M12 14L6 18" stroke={color} strokeWidth="1.5" />
          <path d="M12 14L18 18" stroke={color} strokeWidth="1.5" />
        </g>
      );

      // 27. Pine (松樹) - Guilt
      case 27: return (
        <g>
          <path d="M12 22V4" stroke={color} strokeWidth="1.5" />
          <path d="M12 4L8 8" stroke={color} strokeWidth="1.5" />
          <path d="M12 4L16 8" stroke={color} strokeWidth="1.5" />
          <path d="M12 8L7 12" stroke={color} strokeWidth="1.5" />
          <path d="M12 8L17 12" stroke={color} strokeWidth="1.5" />
          <path d="M12 12L6 16" stroke={color} strokeWidth="1.5" />
          <path d="M12 12L18 16" stroke={color} strokeWidth="1.5" />
        </g>
      );

      // 28. Elm (榆樹) - Overwhelmed by responsibility
      case 28: return (
        <g>
          <path d="M12 22V10" stroke={color} strokeWidth="1.5" />
          <path d="M12 10C12 10 8 8 6 6C4 4 6 2 8 2C10 2 12 6 12 6C12 6 14 2 16 2C18 2 20 4 18 6C16 8 12 10 12 10Z" fill="none" stroke={color} strokeWidth="1.5" />
          <path d="M12 14L8 12" stroke={color} strokeWidth="1.5" />
          <path d="M12 14L16 12" stroke={color} strokeWidth="1.5" />
        </g>
      );

      // 29. Sweet Chestnut (甜栗花) - Extreme anguish
      case 29: return (
        <g>
          <path d="M12 22V12" stroke={color} strokeWidth="1.5" />
          <path d="M12 12L8 6C8 6 6 4 8 2C10 0 12 4 12 4C12 4 14 0 16 2C18 4 16 6 16 6L12 12Z" fill="none" stroke={color} strokeWidth="1.5" />
          <path d="M8 6L4 8" stroke={color} strokeWidth="1.5" />
          <path d="M16 6L20 8" stroke={color} strokeWidth="1.5" />
        </g>
      );

      // 30. Star of Bethlehem (聖星百合) - Shock
      case 30: return (
        <g>
          <path d="M12 22V12" stroke={color} strokeWidth="1.5" />
          <path d="M12 12L9 6L12 2L15 6L12 12Z" fill="none" stroke={color} strokeWidth="1.5" />
          <path d="M12 12L6 9L2 12L6 15L12 12Z" fill="none" stroke={color} strokeWidth="1.5" />
          <path d="M12 12L18 9L22 12L18 15L12 12Z" fill="none" stroke={color} strokeWidth="1.5" />
        </g>
      );

      // 31. Willow (楊柳) - Resentment
      case 31: return (
        <g>
          <path d="M12 22V4" stroke={color} strokeWidth="1.5" />
          <path d="M12 4C12 4 8 6 6 10" fill="none" stroke={color} strokeWidth="1.5" />
          <path d="M12 6C12 6 9 8 8 12" fill="none" stroke={color} strokeWidth="1.5" />
          <path d="M12 4C12 4 16 6 18 10" fill="none" stroke={color} strokeWidth="1.5" />
          <path d="M12 6C12 6 15 8 16 12" fill="none" stroke={color} strokeWidth="1.5" />
        </g>
      );

      // 32. Oak (橡樹) - Exhausted but keeps struggling
      case 32: return (
        <g>
          <path d="M12 22V14" stroke={color} strokeWidth="2" />
          <path d="M12 14C12 14 8 12 6 8C4 4 6 2 8 2C10 2 12 6 12 6C12 6 14 2 16 2C18 2 20 4 18 8C16 12 12 14 12 14Z" fill="none" stroke={color} strokeWidth="1.5" />
          <path d="M12 14L8 16" stroke={color} strokeWidth="1.5" />
          <path d="M12 14L16 16" stroke={color} strokeWidth="1.5" />
          <circle cx="10" cy="18" r="1" fill={color} />
          <circle cx="14" cy="18" r="1" fill={color} />
        </g>
      );

      // 33. Crab Apple (海棠) - Self-dislike
      case 33: return (
        <g>
          <path d="M12 22V12" stroke={color} strokeWidth="1.5" />
          <circle cx="12" cy="8" r="4" fill="none" stroke={color} strokeWidth="1.5" />
          <path d="M12 4V2" stroke={color} strokeWidth="1.5" />
          <path d="M16 8H18" stroke={color} strokeWidth="1.5" />
          <path d="M8 8H6" stroke={color} strokeWidth="1.5" />
          <path d="M15 11L17 13" stroke={color} strokeWidth="1.5" />
          <path d="M9 11L7 13" stroke={color} strokeWidth="1.5" />
        </g>
      );

      // 34. Chicory (菊苣) - Possessiveness
      case 34: return (
        <g>
          <path d="M12 22V12" stroke={color} strokeWidth="1.5" />
          <path d="M12 12L8 8L12 4L16 8L12 12Z" fill="none" stroke={color} strokeWidth="1.5" />
          <path d="M8 8L4 6" stroke={color} strokeWidth="1.5" />
          <path d="M16 8L20 6" stroke={color} strokeWidth="1.5" />
          <path d="M12 12L10 16" stroke={color} strokeWidth="1.5" />
          <path d="M12 12L14 16" stroke={color} strokeWidth="1.5" />
        </g>
      );

      // 35. Vervain (馬鞭草) - Over-enthusiasm
      case 35: return (
        <g>
          <path d="M12 22V4" stroke={color} strokeWidth="1.5" />
          <path d="M12 6L8 4" stroke={color} strokeWidth="1.5" />
          <path d="M12 6L16 4" stroke={color} strokeWidth="1.5" />
          <path d="M12 10L8 8" stroke={color} strokeWidth="1.5" />
          <path d="M12 10L16 8" stroke={color} strokeWidth="1.5" />
          <path d="M12 14L8 12" stroke={color} strokeWidth="1.5" />
          <path d="M12 14L16 12" stroke={color} strokeWidth="1.5" />
        </g>
      );

      // 36. Vine (葡萄藤) - Dominance
      case 36: return (
        <g>
          <path d="M12 22C12 22 14 18 14 12C14 6 12 2 12 2" fill="none" stroke={color} strokeWidth="1.5" />
          <path d="M12 12C12 12 10 10 8 10" fill="none" stroke={color} strokeWidth="1.5" />
          <path d="M14 8C14 8 16 6 18 6" fill="none" stroke={color} strokeWidth="1.5" />
          <circle cx="8" cy="10" r="1.5" fill={color} />
          <circle cx="18" cy="6" r="1.5" fill={color} />
          <circle cx="10" cy="16" r="1.5" fill={color} />
        </g>
      );

      // 37. Beech (山毛櫸) - Intolerance
      case 37: return (
        <g>
          <path d="M12 22V10" stroke={color} strokeWidth="1.5" />
          <path d="M12 10C12 10 8 8 6 6C4 4 6 2 8 2C10 2 12 6 12 6C12 6 14 2 16 2C18 2 20 4 18 6C16 8 12 10 12 10Z" fill="none" stroke={color} strokeWidth="1.5" />
          <path d="M12 10V6" stroke={color} strokeWidth="1.5" />
        </g>
      );

      // 38. Rock Water (岩水) - Self-repression
      case 38: return (
        <g>
          <path d="M12 22V18" stroke={color} strokeWidth="1.5" />
          <path d="M6 16C6 16 8 18 12 18C16 18 18 16 18 16" fill="none" stroke={color} strokeWidth="1.5" />
          <path d="M8 12C8 12 10 14 12 14C14 14 16 12 16 12" fill="none" stroke={color} strokeWidth="1.5" />
          <path d="M10 8C10 8 11 9 12 9C13 9 14 8 14 8" fill="none" stroke={color} strokeWidth="1.5" />
          <circle cx="12" cy="4" r="1.5" fill={color} />
        </g>
      );

      // Default fallback
      default: return (
        <g>
          <path d="M12 22V12" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
          <path d="M12 12L8 8C6 6 8 4 10 6L12 12Z" fill="none" stroke={color} strokeWidth="1.5" />
          <path d="M12 12L16 8C18 6 16 4 14 6L12 12Z" fill="none" stroke={color} strokeWidth="1.5" />
        </g>
      );
    }
  };

  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {getPathForRemedy(remedyId)}
    </svg>
  );
};
