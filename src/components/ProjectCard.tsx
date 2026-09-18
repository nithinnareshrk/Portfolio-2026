import Link from 'next/link';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  title: string;
  subtitle?: string;
  category?: string;
  year?: string;
  description?: string;
  imageUrl: string;
  link: string;
  aspectRatio?: 'landscape' | 'portrait';
}

export default function ProjectCard({
  title,
  subtitle,
  category,
  year,
  description,
  imageUrl,
  link,
  aspectRatio = 'portrait'
}: ProjectCardProps) {
  return (
    <Link href={link} className={styles.card}>
      <div className={`${styles.imageWrapper} ${aspectRatio === 'portrait' ? styles.portrait : ''}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={imageUrl} alt={title} className={styles.image} />
      </div>

      <div className={styles.content}>
        {category && year && (
          <div className={styles.meta}>
            <span className={styles.category}>{category}</span>
            <span className={styles.year}>{year}</span>
          </div>
        )}
        <h3 className={styles.title}>{title}</h3>
        {description && <p className={styles.description}>{description}</p>}
      </div>
    </Link>
  );
}
