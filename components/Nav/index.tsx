import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { NavContainer } from './styles';

export default function Nav() {
  const router = useRouter();
  const navLinks = [
    { title: '지도 → 폴리곤', path: '/' },
    { title: '폴리곤 → 지도', path: '/input' },
  ];
  return (
    <NavContainer>
      <ul>
        {navLinks?.map((link) => (
          <li
            className={router.pathname === link.path ? 'active' : ''}
            key={link.title}
          >
            <Link href={link.path}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </NavContainer>
  );
}
