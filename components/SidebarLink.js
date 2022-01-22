function SidebarLink({ Icon, text, active }) {
    // const router = useRouter();
    return (
      <div>
        <Icon className="h-7" />
        <span className="hidden xl:inline">{text}</span>
      </div>
    );
  }