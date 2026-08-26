// Centralised icon mapping so data files can reference icons by string name.
import {
  Sun,
  Leaf,
  Brain,
  Mountain,
  Activity,
  Wind,
  Sunrise,
  Moon,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Calendar,
  Clock,
  Mail,
  CheckCircle2,
  Quote,
  Sprout,
  HeartPulse,
  FlaskConical,
  Globe,
} from 'lucide-react';

const map = {
  Sun,
  Leaf,
  Brain,
  Mountain,
  Activity,
  Wind,
  Sunrise,
  Moon,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Calendar,
  Clock,
  Mail,
  CheckCircle2,
  Quote,
  Sprout,
  HeartPulse,
  FlaskConical,
  Globe,
};

export function Icon({ name, ...props }) {
  const Cmp = map[name] || BookOpen;
  return <Cmp {...props} />;
}
