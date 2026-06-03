export const styles = {
    app: {
        background: "min-h-screen bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 py-12 px-4 sm:px-6 lg:px-8 font-sans text-slate-900 selection:bg-purple-200 selection:text-purple-900",
        container: "max-w-4xl mx-auto",
        headerWrapper: "mb-10 text-center sm:text-left",
        headerTitle: "text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2 cursor-default drop-shadow-sm",
        headerSubtitle: "text-indigo-900/60 font-bold cursor-default",
        errorBox: "mb-8 p-4 bg-rose-100 border-l-4 border-rose-500 rounded-r-xl text-rose-800 flex items-center gap-3 shadow-sm",
        errorIcon: "w-6 h-6",
        errorText: "font-bold",
        controlsContainer: "bg-white/80 backdrop-blur-md p-3 rounded-2xl shadow-sm shadow-blue-900/5 border border-white/60 mb-8 flex flex-col lg:flex-row gap-4 items-center justify-between",
        controlsRight: "flex flex-col sm:flex-row w-full lg:w-auto gap-3 items-center",
        tagsSection: "mb-8",
        tagsTitle: "text-[11px] font-black uppercase tracking-widest text-purple-400 mb-3 ml-1 cursor-default",
        tagsWrapper: "flex flex-wrap gap-2",
        listContainer: "min-h-[300px]",
        loadingWrapper: "flex flex-col gap-3 animate-pulse",
        loadingItem: "h-28 bg-white/50 border border-white rounded-2xl w-full shadow-sm",
        emptyBox: "flex flex-col items-center justify-center h-56 text-center px-4 bg-white/50 backdrop-blur-sm border-2 border-blue-200 border-dashed rounded-3xl",
        emptyIconWrapper: "w-14 h-14 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center mb-4 shadow-inner",
        emptyIcon: "w-6 h-6",
        emptyTitle: "text-lg font-black text-blue-900 mb-1 cursor-default",
        emptySubtitle: "text-sm font-bold text-blue-600/70 cursor-default"
    },
    taskForm: {
        form: "flex flex-col sm:flex-row gap-3 mb-10 bg-white/70 backdrop-blur-md p-3 sm:p-4 rounded-3xl border border-white/50 shadow-lg shadow-indigo-100/50",
        titleWrapper: "flex-1",
        titleInput: "w-full px-5 py-3.5 bg-white border border-indigo-100 rounded-2xl shadow-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 transition-all font-medium cursor-text",
        tagsWrapper: "sm:w-1/3",
        tagsInput: "w-full px-5 py-3.5 bg-white border border-indigo-100 rounded-2xl shadow-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-500/20 transition-all font-medium text-sm cursor-text",
        submitBtn: "cursor-pointer px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold rounded-2xl shadow-lg shadow-purple-500/30 transform hover:-translate-y-0.5 active:scale-95 transition-all focus:outline-none focus:ring-4 focus:ring-purple-500/30"
    },
    taskSearch: {
        wrapper: "relative flex-1 w-full sm:w-auto",
        iconWrapper: "absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none",
        icon: "h-4 w-4 text-blue-400",
        input: "w-full pl-10 pr-4 py-2 bg-blue-50/50 border border-blue-100 rounded-xl text-sm font-medium text-blue-900 placeholder-blue-400 focus:outline-none focus:bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 transition-all cursor-text"
    },
    taskFilter: {
        wrapper: "flex bg-blue-50/80 p-1 rounded-xl border border-blue-100",
        btnBase: "cursor-pointer px-4 py-1.5 rounded-lg text-sm font-bold transition-all duration-200",
        btnActive: "bg-blue-600 text-white shadow-md shadow-blue-500/30 border border-blue-500",
        btnInactive: "text-blue-600 hover:text-blue-800 hover:bg-blue-100/80"
    },
    taskSort: {
        select: "w-full sm:w-auto pl-4 pr-10 py-2 bg-blue-50/50 border border-blue-100 text-blue-800 text-sm font-bold rounded-xl focus:outline-none focus:bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 transition-all appearance-none cursor-pointer"
    },
    taskTag: {
        btnBase: "cursor-pointer px-3 py-1.5 rounded-xl text-[11px] font-bold tracking-wide transition-all duration-200",
        btnActive: "bg-purple-600 text-white shadow-lg shadow-purple-500/40 ring-2 ring-purple-400 ring-offset-1 ring-offset-blue-50",
        btnInactive: "bg-white text-purple-600 border border-purple-200 hover:bg-purple-50 hover:border-purple-300 shadow-sm"
    },
    taskItem: {
        containerBase: "group relative flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 mb-3 rounded-2xl border transition-all duration-300",
        containerCompleted: "bg-white/40 border-white opacity-70 hover:opacity-100",
        containerPending: "bg-white border-blue-100 shadow-md shadow-blue-100/50 hover:shadow-lg hover:shadow-blue-200/50 hover:border-blue-200",
        leftSection: "flex items-start md:items-center gap-4 flex-1 min-w-0 pl-1 py-1",
        checkboxWrapper: "mt-1 md:mt-0 relative flex items-center justify-center",
        checkboxInput: "peer h-6 w-6 cursor-pointer appearance-none rounded-lg border-2 border-blue-300 bg-blue-50 checked:border-blue-500 checked:bg-blue-500 transition-all hover:border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-500/30 m-0 shadow-sm",
        checkboxIcon: "absolute w-4 h-4 text-white pointer-events-none opacity-0 scale-50 peer-checked:opacity-100 peer-checked:scale-100 transition-all duration-200",
        contentWrapper: "flex flex-col flex-1 w-full gap-1.5",
        titleBase: "w-full bg-transparent text-[1.1rem] font-bold outline-none transition-all duration-200 border-b-2 truncate",
        titleEditing: "border-purple-400 text-slate-900 pb-0.5 cursor-text",
        titleReadonly: "border-transparent text-slate-800 cursor-default",
        titleCompleted: "line-through text-slate-400",
        metaWrapper: "flex flex-wrap items-center gap-3",
        tagsWrapper: "flex gap-1.5 flex-wrap",
        tagBase: "px-2 py-0.5 rounded-md text-[10px] font-bold tracking-wider shadow-sm",
        tagCompleted: "bg-slate-100 text-slate-400",
        tagPending: "bg-purple-100 text-purple-700 border border-purple-200/50",
        datesWrapper: "flex gap-3 text-[11px] font-semibold text-slate-400",
        dateCreated: "flex items-center gap-1",
        dateIcon: "w-3.5 h-3.5 text-blue-300",
        dateEdited: "text-slate-300",
        actionsWrapper: "flex items-center gap-1.5 mt-4 md:mt-0",
        btnIcon: "w-4 h-4",
        saveBtn: "cursor-pointer px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-500 hover:to-teal-600 shadow-md shadow-emerald-500/30 rounded-xl transition-all duration-200 active:scale-95 flex items-center gap-1.5",
        editBtnBase: "cursor-pointer px-3 py-2 text-sm font-bold rounded-xl transition-all duration-200 flex items-center gap-1.5 active:scale-95",
        editBtnEditing: "text-slate-600 bg-slate-100 hover:bg-slate-200",
        editBtnStandard: "text-blue-600 bg-blue-50 border border-blue-100 shadow-sm hover:text-blue-800 hover:bg-blue-100 hover:border-blue-200 hover:shadow-md",
        deleteBtn: "cursor-pointer px-3 py-2 text-sm font-bold text-pink-600 bg-pink-50 border border-pink-100 shadow-sm hover:text-pink-800 hover:bg-pink-100 hover:border-pink-200 hover:shadow-md rounded-xl transition-all duration-200 flex items-center gap-1.5 active:scale-95"
}
}

export default styles;