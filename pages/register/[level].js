import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { Layout } from '../../components/layout/Layout';
import { StyledInput as Input } from '../../components/input/Input.styles';
import { useState } from 'react';
import { StyledButton as Button } from '../../components/layout/button/Button.styles';

export default function Register() {
  const router = useRouter();

  const { level } = router.query;
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async event => {
    event.preventDefault();
    const text = `*:party_blob: New registration for level ${level} SEK :party_blob:*
Name: ${name}
Title: ${title}
Description: ${description}`;
    const res = await fetch('/api/slack/' + encodeURIComponent(text));
    setSubmitted(res.ok);
  };

  return (
    <Layout>
      <Head>
        <title>Register</title>
      </Head>
      <section>
        {submitted ? (
          <h2>Success!</h2>
        ) : (
          <>
            <h2>Register for {level} SEK</h2>
            <form onSubmit={onSubmit}>
              <label htmlFor="name">Name</label>
              <Input
                id="name"
                required
                value={name}
                onChange={({ target: { value } }) => setName(value)}
              />
              <label htmlFor="title">Title</label>
              <Input
                id="title"
                required
                value={title}
                onChange={({ target: { value } }) => setTitle(value)}
              />
              <label htmlFor="description">Description</label>
              <Input
                required
                id="description"
                value={description}
                onChange={({ target: { value } }) => setDescription(value)}
              />
              <Button type="submit">Send</Button>
            </form>
          </>
        )}
      </section>
    </Layout>
  );
}
