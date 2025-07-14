import React from 'react';
import type { Template } from 'tinacms';
import { AdvancedBlockBase, AdvancedBlockBaseProps, BlockView } from '../AdvancedBlockBase';
import { sectionBlockSchemaField } from '@/components/layout/section';

// Tipos auxiliares
interface PetitionData {
  title: string;
  heroImage?: string;
  description: string;
  testimonials?: { name: string; message: string; avatar?: string }[];
  goal: number;
  signatures: number;
  supporters?: { name: string; avatar?: string }[];
}

interface OnlinePetitionBlockState {
  petition?: PetitionData;
  name: string;
  email: string;
  loading: boolean;
  error?: string;
  success?: boolean;
}

export interface OnlinePetitionBlockProps extends AdvancedBlockBaseProps {
  petitionId?: string;
  apiUrl?: string; // URL da API externa
}

export class OnlinePetitionBlock extends AdvancedBlockBase<OnlinePetitionBlockProps, OnlinePetitionBlockState> {
  constructor(props: OnlinePetitionBlockProps) {
    super(props);
    this.state = {
      name: '',
      email: '',
      loading: false,
      petition: undefined,
    };
  }

  componentDidMount() {
    this.loadPetition();
  }

  async loadPetition() {
    if (this.props.apiUrl && this.props.petitionId) {
      try {
        const res = await fetch(`${this.props.apiUrl}/petition/${this.props.petitionId}`);
        const petition = await res.json();
        this.setState({ petition });
      } catch (e) {
        this.setState({ error: 'Erro ao carregar petição.' });
      }
    }
  }

  async handleSign(e: React.FormEvent) {
    e.preventDefault();
    this.setState({ loading: true, error: undefined, success: false });
    try {
      const res = await fetch(`${this.props.apiUrl}/petition/${this.props.petitionId}/sign`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: this.state.name, email: this.state.email }),
      });
      if (!res.ok) throw new Error('Erro ao registrar assinatura.');
      this.setState({ success: true, name: '', email: '' });
      this.loadPetition(); // Atualiza dashboard
    } catch (e) {
      this.setState({ error: 'Erro ao registrar assinatura.' });
    } finally {
      this.setState({ loading: false });
    }
  }

  renderHero() {
    const { petition } = this.state;
    if (!petition) return null;
    return (
      <div className="petition-hero">
        {petition.heroImage && <img src={petition.heroImage} alt={petition.title} style={{ width: '100%', borderRadius: 12 }} />}
        <h1>{petition.title}</h1>
      </div>
    );
  }

  renderCarousel() {
    const { petition } = this.state;
    if (!petition?.testimonials?.length) return null;
    // Simples carrossel horizontal
    return (
      <div className="petition-carousel" style={{ display: 'flex', overflowX: 'auto', gap: 16, margin: '16px 0' }}>
        {petition.testimonials.map((t, i) => (
          <div key={i} style={{ minWidth: 220, background: '#f7f7f7', borderRadius: 8, padding: 12 }}>
            {t.avatar && <img src={t.avatar} alt={t.name} style={{ width: 40, borderRadius: '50%' }} />}
            <div style={{ fontWeight: 'bold' }}>{t.name}</div>
            <div style={{ fontStyle: 'italic' }}>&quot;{t.message}&quot;</div>
          </div>
        ))}
      </div>
    );
  }

  renderDescription() {
    const { petition } = this.state;
    if (!petition) return null;
    return <p style={{ margin: '16px 0' }}>{petition.description}</p>;
  }

  renderDashboard() {
    const { petition } = this.state;
    if (!petition) return null;
    const percent = Math.min(100, Math.round((petition.signatures / petition.goal) * 100));
    return (
      <div className="petition-dashboard" style={{ margin: '16px 0' }}>
        <div style={{ fontWeight: 'bold' }}>{petition.signatures} assinaturas de {petition.goal} meta</div>
        <div style={{ background: '#eee', borderRadius: 8, height: 16, width: '100%', margin: '8px 0' }}>
          <div style={{ background: '#4caf50', width: `${percent}%`, height: '100%', borderRadius: 8 }} />
        </div>
        <div style={{ fontSize: 12, color: '#888' }}>{percent}% da meta atingida</div>
      </div>
    );
  }

  renderSignForm() {
    const { name, email, loading, error, success } = this.state;
    return (
      <form onSubmit={e => this.handleSign(e)} style={{ margin: '16px 0', display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 320 }}>
        <input type="text" placeholder="Seu nome" value={name} onChange={e => this.setState({ name: e.target.value })} required style={{ padding: 8, borderRadius: 4, border: '1px solid #ccc' }} />
        <input type="email" placeholder="Seu email" value={email} onChange={e => this.setState({ email: e.target.value })} required style={{ padding: 8, borderRadius: 4, border: '1px solid #ccc' }} />
        <button type="submit" disabled={loading} style={{ padding: 10, borderRadius: 4, background: '#4caf50', color: '#fff', fontWeight: 'bold', border: 'none' }}>Assinar</button>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        {success && <div style={{ color: 'green' }}>Assinatura registrada! Obrigado pelo apoio.</div>}
      </form>
    );
  }

  renderShare() {
    const { petition } = this.state;
    if (!petition) return null;
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`Assine a petição: ${petition.title}`);
    return (
      <div style={{ margin: '16px 0', display: 'flex', gap: 8 }}>
        <a href={`https://twitter.com/intent/tweet?text=${text}&url=${url}`} target="_blank" rel="noopener noreferrer">Compartilhar no Twitter</a>
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} target="_blank" rel="noopener noreferrer">Compartilhar no Facebook</a>
        <a href={`https://wa.me/?text=${text}%20${url}`} target="_blank" rel="noopener noreferrer">Compartilhar no WhatsApp</a>
      </div>
    );
  }

  renderView(view: BlockView) {
    // Visão padrão: tudo junto
    return (
      <div className="petition-block" style={{ maxWidth: 600, margin: '0 auto', padding: 24, background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #0001' }}>
        {this.renderHero()}
        {this.renderCarousel()}
        {this.renderDescription()}
        {this.renderDashboard()}
        {this.renderSignForm()}
        {this.renderShare()}
      </div>
    );
  }
}

export const onlinePetitionBlockSchema: Template = {
  name: 'online_petition',
  label: 'Petição Online',
  ui: {
    previewSrc: '/blocks/online-petition.png',
    defaultItem: {
      view: 'default',
    },
  },
  fields: [
    sectionBlockSchemaField as any,
    {
      type: 'string',
      label: 'URL da Petição',
      name: 'petitionUrl',
      description: 'URL JSON que retorna os dados da petição',
    },
    {
      type: 'string',
      label: 'Vista',
      name: 'view',
      options: [
        { label: 'Padrão', value: 'default' },
        { label: 'Compacta', value: 'compact' },
      ],
    },
    {
      type: 'boolean',
      label: 'Mostrar Contador',
      name: 'showCounter',
    },
  ],
};
